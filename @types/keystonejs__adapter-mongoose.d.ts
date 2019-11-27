/**
 * @module `@types/keystonejs__adapter-mongoose`
 * @description There was a typo in `@types/keystonejs__adapter-mongoose` so now I need to adapt.
 */
declare module "@keystonejs/adapter-mongoose" {
  import { BaseKeystoneAdapter } from "@keystonejs/keystone";

  interface MongooseAdaptorOptions {
    mongoUri: string;
    listAdapterClass?: any;
  }

  class MongooseAdapter extends BaseKeystoneAdapter {
    constructor(options?: MongooseAdaptorOptions);

    disconnect(): void;
    dropDatabase(): any;
  }
}
