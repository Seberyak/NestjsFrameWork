import Joi from '../../src/@input/joi';

export const UserSchema = Joi.object({
	firstName: Joi.string().required(),
	lastName: Joi.string().required(),
	phoneNumber: Joi.string().required(),
	eMail: Joi.string().required(),
});

export interface IUser {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	eMail: string;
}
