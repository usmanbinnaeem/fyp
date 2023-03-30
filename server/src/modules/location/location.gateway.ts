import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class LocationGateway {
  @WebSocketServer() server: Server;

  @SubscribeMessage('updateLocation')
  handleLocationUpdate(client: any, payload: { lat: number; lng: number }) {
    // Broadcast the updated location to all clients
    client.broadcast.emit('locationUpdated', payload);
  }
}
