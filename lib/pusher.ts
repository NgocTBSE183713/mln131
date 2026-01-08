import Pusher from 'pusher';

const {
  PUSHER_APP_ID,
  PUSHER_KEY,
  PUSHER_SECRET,
  PUSHER_CLUSTER
} = process.env;

export const pusherConfigured = Boolean(PUSHER_APP_ID && PUSHER_KEY && PUSHER_SECRET && PUSHER_CLUSTER);

if (!pusherConfigured) {
  console.warn('Pusher environment variables are missing. Realtime features will fail until configured.');
}

export const pusherServer = new Pusher({
  appId: PUSHER_APP_ID || '',
  key: PUSHER_KEY || '',
  secret: PUSHER_SECRET || '',
  cluster: PUSHER_CLUSTER || 'ap1',
  useTLS: true
});
