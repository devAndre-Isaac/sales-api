import { Request, Response } from 'express';
import ShowProfileService from '../services/ShowProfileService';

export default class ProfileController {
  public async show(request: Request, response: Response): Promise<Response> {
    const showProfile = new ShowProfileService();
    const user_id = request.user.id;

    const user = await showProfile.execute({ user_id });

    return response.json(user);
  }
}
