import { discordAPI } from "api/discord";

export interface DiscordAuthProps {
  token: string;
  tokenType: String;
}

export async function discordAuthentication({ token, tokenType }: DiscordAuthProps) {
  const response = await discordAPI.get('/users/@me', {
    headers: {
      authorization: `${tokenType} ${token}`,
    },
  });

  return response;
}