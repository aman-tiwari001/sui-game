import { SuiClient } from '@mysten/sui.js/client';
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';
import { generateNonce, generateRandomness } from '@mysten/zklogin';

const FULLNODE_URL = 'https://fullnode.devnet.sui.io';
const suiClient = new SuiClient({ url: FULLNODE_URL });
const { epoch, epochDurationMs, epochStartTimestampMs } =
  await suiClient.getLatestSuiSystemState();

const maxEpoch = Number(epoch) + 2; // this means the ephemeral key will be active for 2 epochs from now.
const ephemeralKeyPair = new Ed25519Keypair();
const randomness = generateRandomness();
const nonce = generateNonce(
  ephemeralKeyPair.getPublicKey(),
  maxEpoch,
  randomness
);
