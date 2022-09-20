class ErrorWithStatus extends Error {
  status: number;
  
  message: string;
  
  constructor(message: string, status = 400) {
    super(message);
    this.status = status;
    this.message = message;
  }
}
  
export default ErrorWithStatus;