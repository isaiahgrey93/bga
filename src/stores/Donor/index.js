import Profile, { store as ProfileStore, } from './Profile';
import Wallet, { store as WalletStore, } from './Wallet';

export default {
  Profile,
  Wallet,
  stores: [ProfileStore, WalletStore, ],
};
