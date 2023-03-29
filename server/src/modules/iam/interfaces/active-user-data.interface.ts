import { Role } from '../../users/enum/role.enum';

export interface ActiveUserData {
  sub: number;
  phone: string;
  role: Role;
}
