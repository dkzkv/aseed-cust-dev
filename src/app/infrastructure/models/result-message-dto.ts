import { Guid } from "../types/guid";


/** TODO: rename to ResultMessageDto */
export interface IApiResponseDto {
   ok: boolean;
   errors: Array<IValidateErrorItemDto>;
   data?: Guid;
}

export interface IApiResponseCommonDto<TResult> {
   ok: boolean;
   errors: Array<IValidateErrorItemDto>;
   data?: TResult;
}

export interface ValidateErrorsDto {
   ok: boolean;
   errors: Array<IValidateErrorItemDto>;
}

export interface IValidateErrorItemDto {
   key: string;
   message: string;
}

export interface IValidateNotificationItemDto {
   message: string;
}