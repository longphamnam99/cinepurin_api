export class AuthResponseDto {
  id: number;
  username: string;
  permission: string;
  email: string;

  constructor({ id, username, email, permission }) {
    this.id = id;
    this.username = username;
    this.permission = permission;
    this.email = email;
  }
}

export class AuthPayloadDto {
  username: string;
  email: string;
  password: string;
  gender: number;
  birthday: string;
  address: string;
  idcard: string;
  phone: string;
}

export class AuthPermission {
  id: number;
  token: string;
  expiredTime: number;

  constructor({ id, token, expiredTime }) {
    this.id = id;
    this.token = token;
    this.expiredTime = expiredTime;
  }
}