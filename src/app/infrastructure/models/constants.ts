import {AuthStatus} from "../services/auth.service";

export const AuthStatusMessages: { [key in AuthStatus]: string } = {
  [AuthStatus.Success]: "Authentication was successful.",
  [AuthStatus.Error]: "An unknown error occurred.",
  [AuthStatus.EmailAlreadyExists]: "The email address is already registered.",
  [AuthStatus.InvalidCredentials]: "The email or password is incorrect.",
  [AuthStatus.UnverifiedEmail]: "Your email address is not verified.",
  [AuthStatus.NotInWhiteList]: "You are not in the whitelist.",
  [AuthStatus.NotPermitted]: "You do not have permission to perform this action.",
  [AuthStatus.Expired]: "Your session has expired. Please log in again."
};
