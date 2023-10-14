import {NextResponse} from "next/server";

const postmark = require('postmark')

export async function POST(req) {

    const client = new postmark.ServerClient('fd9632d3-4fba-4817-9bbc-04c10578b4ab');

    const requestBody = await req.json();

    try {
        // Define the template model with variables you want to replace in your template.
        const name = requestBody.name
        const email = requestBody.email
        const subject = requestBody.subject
        const message = requestBody.message

        const response = await client.sendEmail({
            "From": "mousavizade@risklab.ai",
            "To": email,
            "Subject": "Hello, Dear " + name + ",\n Your message has been received right now!",
            "TextBody": subject + "\n" + message + "\n\n" + "Your above message has received right now. We will respond your message as soon as possible." + "\n\nThanks\nAlireza and the RiskLabAI Team",
        });

        if (response.ErrorCode !== 0) {
            return
        }

        return


    } catch (error) {
        return
    }
}

