import sgMail, { ResponseError, type MailDataRequired } from "@sendgrid/mail";
import { renderTemplate, type TemplateRenderType } from "./TemplateRender";

type MsgData<T extends keyof TemplateRenderType> = {
    template: T;
    props: TemplateRenderType[T];
    } & Omit<MailDataRequired, "from" | "html" | "text">;

type SendMailReturnType = Promise<{ success: boolean; message: string; error?: Error}>;

export async function SendMail<T extends keyof TemplateRenderType>(message: MsgData<T>|MsgData<T>[]): SendMailReturnType{
    if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_FROM) return { success: false, message: "Required env is not set" };
  let preparedMsg;
  if (!Array.isArray(message)) {
    const { template, props, ...fields } = message;
    const { html } = renderTemplate(template, props);
    preparedMsg = { from: process.env.SENDGRID_FROM!, ...fields, html, text:"placeholder" };
  } else {
    preparedMsg = message.map((msg) => {
      const { template, props, ...fields } = msg;
      const { html } = renderTemplate(template, props);
      return { from: process.env.SENDGRID_FROM!, ...fields, html, text:"placeholder" };
    });
  }
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    await sgMail.send(preparedMsg, !Array.isArray(message));
    return { success: true, message: "email sent successfully" };
  } catch (error) {
    if (error instanceof ResponseError) return { success: false, message: "sending email failed", error };
    return { success: false, message: "sending email failed", error: new Error(JSON.stringify(error)) };
  }
}
