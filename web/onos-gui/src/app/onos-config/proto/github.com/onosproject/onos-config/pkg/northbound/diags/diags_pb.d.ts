// Code generated by protoc-gen-go. DO NOT EDIT.

import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import * as github_com_onosproject_onos$config_pkg_northbound_admin_admin_pb from '../../../../../../github.com/onosproject/onos-config/pkg/northbound/admin/admin_pb';

export class ChangesRequest extends jspb.Message {
  getChangeIdsList(): Array<string>;
  setChangeIdsList(value: Array<string>): void;
  clearChangeIdsList(): void;
  addChangeIds(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangesRequest): ChangesRequest.AsObject;
  static serializeBinaryToWriter(message: ChangesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangesRequest;
  static deserializeBinaryFromReader(message: ChangesRequest, reader: jspb.BinaryReader): ChangesRequest;
}

export namespace ChangesRequest {
  export type AsObject = {
    changeIdsList: Array<string>,
  }
}

export class ConfigRequest extends jspb.Message {
  getDeviceIdsList(): Array<string>;
  setDeviceIdsList(value: Array<string>): void;
  clearDeviceIdsList(): void;
  addDeviceIds(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigRequest): ConfigRequest.AsObject;
  static serializeBinaryToWriter(message: ConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigRequest;
  static deserializeBinaryFromReader(message: ConfigRequest, reader: jspb.BinaryReader): ConfigRequest;
}

export namespace ConfigRequest {
  export type AsObject = {
    deviceIdsList: Array<string>,
  }
}

export class OpStateRequest extends jspb.Message {
  getDeviceid(): string;
  setDeviceid(value: string): void;

  getSubscribe(): boolean;
  setSubscribe(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpStateRequest): OpStateRequest.AsObject;
  static serializeBinaryToWriter(message: OpStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpStateRequest;
  static deserializeBinaryFromReader(message: OpStateRequest, reader: jspb.BinaryReader): OpStateRequest;
}

export namespace OpStateRequest {
  export type AsObject = {
    deviceid: string,
    subscribe: boolean,
  }
}

export class OpStateResponse extends jspb.Message {
  getType(): github_com_onosproject_onos$config_pkg_northbound_admin_admin_pb.Type;
  setType(value: github_com_onosproject_onos$config_pkg_northbound_admin_admin_pb.Type): void;

  getPathvalue(): github_com_onosproject_onos$config_pkg_northbound_admin_admin_pb.ChangeValue | undefined;
  setPathvalue(value?: github_com_onosproject_onos$config_pkg_northbound_admin_admin_pb.ChangeValue): void;
  hasPathvalue(): boolean;
  clearPathvalue(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OpStateResponse): OpStateResponse.AsObject;
  static serializeBinaryToWriter(message: OpStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpStateResponse;
  static deserializeBinaryFromReader(message: OpStateResponse, reader: jspb.BinaryReader): OpStateResponse;
}

export namespace OpStateResponse {
  export type AsObject = {
    type: github_com_onosproject_onos$config_pkg_northbound_admin_admin_pb.Type,
    pathvalue?: github_com_onosproject_onos$config_pkg_northbound_admin_admin_pb.ChangeValue.AsObject,
  }
}

export class Configuration extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDeviceId(): string;
  setDeviceId(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getDeviceType(): string;
  setDeviceType(value: string): void;

  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreated(): boolean;
  clearCreated(): void;

  getUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdated(): boolean;
  clearUpdated(): void;

  getChangeIdsList(): Array<string>;
  setChangeIdsList(value: Array<string>): void;
  clearChangeIdsList(): void;
  addChangeIds(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Configuration.AsObject;
  static toObject(includeInstance: boolean, msg: Configuration): Configuration.AsObject;
  static serializeBinaryToWriter(message: Configuration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Configuration;
  static deserializeBinaryFromReader(message: Configuration, reader: jspb.BinaryReader): Configuration;
}

export namespace Configuration {
  export type AsObject = {
    name: string,
    deviceId: string,
    version: string,
    deviceType: string,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    changeIdsList: Array<string>,
  }
}
