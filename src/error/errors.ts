export class ApplicationError extends Error {
	public readonly code: number = 0;

	public constructor(message: string, code: number) {
		super(message);
		this.code = code;
	}
}

export class RuntimeError extends ApplicationError {
	public constructor(message: string) {
		super(message, 400);
	}
}

export class DataFormatError extends ApplicationError {
	public constructor(message: string) {
		super(message, 400);
	}
}

export class IllegalArgumentError extends ApplicationError {
	public constructor(message: string) {
		super(message, 400);
	}
}

export class UnauthorizedError extends ApplicationError {
	public constructor(message: string) {
		super(message, 401);
	}
}

export class DataNotFoundError extends ApplicationError {
	public constructor(message: string) {
		super(message, 404);
	}
}

export class InternalServerError extends ApplicationError {
	public constructor(message: string) {
		super(message, 500);
	}
}

export class NotImplementedError extends ApplicationError {
	public constructor(message: string) {
		super(message, 501);
	}
}
