import {
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import Redis from 'ioredis';

export class InvalidateRefreshTokenError extends Error {}

@Injectable()
export class RefreshTokenIdsStorage
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  private redisClients: Redis;
  onApplicationBootstrap() {
    this.redisClients = new Redis({
      host: 'localhost',
      port: 6379,
    });
  }

  onApplicationShutdown(signal?: string) {
    return this.redisClients.quit();
  }

  async insert(userId: number, tokenId: string): Promise<void> {
    await this.redisClients.set(this.getKey(userId), tokenId);
  }
  async validate(userId: number, tokenId: string): Promise<boolean> {
    const storedId = await this.redisClients.get(this.getKey(userId));
    if (storedId !== tokenId) {
      throw new InvalidateRefreshTokenError();
    }
    return storedId === tokenId;
  }
  async inValidate(userId: number): Promise<void> {
    await this.redisClients.del(this.getKey(userId));
  }
  private getKey(userId: number): string {
    return `user-${userId}`;
  }

  async insert_otp(id: string, entry: string): Promise<void> {
    await this.redisClients.set(id, entry);
  }
  async validate_otp(id: string): Promise<string> {
    const storedId = await this.redisClients.get(id);
    return storedId;
  }
}
