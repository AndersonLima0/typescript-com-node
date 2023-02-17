interface IMailTO {
  name: string;
  email: string;
}

interface IMessage {
  subject: string;
  body: string;
  attachments?: string[];
}
// Data Transfer Object
interface IMessageDTO {
  to: IMailTO;
  message: IMessage;
}

class EmailService {
  sendEmail({ to, message }: IMessageDTO) {
    console.log(
      `Email enviado com sucesso para ${to.name}: ${message.subject}`
    );
  }
}

export default EmailService;
