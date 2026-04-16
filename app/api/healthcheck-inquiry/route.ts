import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, title, email, company, symptom } = body;

    // Validate bare minimum
    if (!name || !email || !company) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

    // Construct the Slack message payload using Slack's Block Kit for beautifully formatted cards
    const slackMessage = {
      text: "🚨 *New GTM Health Check Inquiry* 🚨",
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "New GTM Health Check Inquiry",
            emoji: true
          }
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Name:*\n${name}`
            },
            {
              type: "mrkdwn",
              text: `*Title:*\n${title}`
            },
            {
              type: "mrkdwn",
              text: `*Company:*\n${company}`
            },
            {
              type: "mrkdwn",
              text: `*Email:*\n${email}`
            }
          ]
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*GTM Context / Challenges:*\n> ${symptom || '_Not provided_'}`
          }
        }
      ]
    };

    if (slackWebhookUrl) {
      // Send to Slack!
      const response = await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(slackMessage)
      });

      if (!response.ok) {
        throw new Error(`Slack API error: ${response.statusText}`);
      }

      return NextResponse.json({ success: true });
    } else {
      // Mock log for development if the env var isn't setup yet
      console.log('--- SLACK WEBHOOK MOCK START ---');
      console.log(JSON.stringify(slackMessage, null, 2));
      console.log('--- END SLACK WEBHOOK MOCK ---');
      return NextResponse.json({ success: true, mocked: true });
    }

  } catch (err: any) {
    console.error('Error handling inquiry submission:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
