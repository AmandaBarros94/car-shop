class ErrorWithStatus extends Error {
  status: number;
  
  error: string;
  
  constructor(error: string, status = 400) {
    super(error);
    this.status = status;
    this.error = error;
  }
}
  
export default ErrorWithStatus;