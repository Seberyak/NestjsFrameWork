import { Controller, Post } from "@nestjs/common";
import { wValidatedArg } from "../decorators/validation";
import { IUser, UserSchema } from "../../../schemas/auth/helper-schemas";

@Controller("api/auth")
export class AuthController {
	constructor() {}

	@Post("register")
	async register(@wValidatedArg(UserSchema) args: IUser) {
		console.log(args);
		return args;
	}
}
