import { SendMail } from "./Mailer"

(async ()=>{
    const res = await SendMail({template:"default", props:{}, to:"emily.negrette@kellerpostman.com", subject: "test email" });
    console.log(res);
})()