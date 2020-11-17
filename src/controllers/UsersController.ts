import { Request, Response } from 'express';

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    return response.json({ message: 'ok' });
  }
  public async index(request: Request, response: Response): Promise<Response> {
    return response.json({ message: 'ok' });
  }
  public async update(request: Request, response: Response): Promise<Response> {
    return response.json({ message: 'ok' });
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    return response.json({ message: 'ok' });
  }
}

export default new UsersController();
