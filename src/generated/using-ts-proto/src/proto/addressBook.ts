/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'tutorial'

export interface Person {
  name: string
  phones: Person_PhoneNumber[]
}

export enum Person_PhoneType {
  MOBILE = 0,
  HOME = 1,
  WORK = 2,
  UNRECOGNIZED = -1
}

export function person_PhoneTypeFromJSON(object: any): Person_PhoneType {
  switch (object) {
    case 0:
    case 'MOBILE':
      return Person_PhoneType.MOBILE
    case 1:
    case 'HOME':
      return Person_PhoneType.HOME
    case 2:
    case 'WORK':
      return Person_PhoneType.WORK
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Person_PhoneType.UNRECOGNIZED
  }
}

export function person_PhoneTypeToJSON(object: Person_PhoneType): string {
  switch (object) {
    case Person_PhoneType.MOBILE:
      return 'MOBILE'
    case Person_PhoneType.HOME:
      return 'HOME'
    case Person_PhoneType.WORK:
      return 'WORK'
    default:
      return 'UNKNOWN'
  }
}

export interface Person_PhoneNumber {
  number: string
  type: Person_PhoneType
}

export interface AddressBook {
  people: Person[]
}

function createBasePerson(): Person {
  return { name: '', phones: [] }
}

export const Person = {
  encode(message: Person, writer: Writer = Writer.create()): Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    for (const v of message.phones) {
      Person_PhoneNumber.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Person {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePerson()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string()
          break
        case 2:
          message.phones.push(Person_PhoneNumber.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Person {
    return {
      name: isSet(object.name) ? String(object.name) : '',
      phones: Array.isArray(object?.phones) ? object.phones.map((e: any) => Person_PhoneNumber.fromJSON(e)) : []
    }
  },

  toJSON(message: Person): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    if (message.phones) {
      obj.phones = message.phones.map((e) => (e ? Person_PhoneNumber.toJSON(e) : undefined))
    } else {
      obj.phones = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Person>, I>>(object: I): Person {
    const message = createBasePerson()
    message.name = object.name ?? ''
    message.phones = object.phones?.map((e) => Person_PhoneNumber.fromPartial(e)) || []
    return message
  }
}

function createBasePerson_PhoneNumber(): Person_PhoneNumber {
  return { number: '', type: 0 }
}

export const Person_PhoneNumber = {
  encode(message: Person_PhoneNumber, writer: Writer = Writer.create()): Writer {
    if (message.number !== '') {
      writer.uint32(10).string(message.number)
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Person_PhoneNumber {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePerson_PhoneNumber()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.number = reader.string()
          break
        case 2:
          message.type = reader.int32() as any
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Person_PhoneNumber {
    return {
      number: isSet(object.number) ? String(object.number) : '',
      type: isSet(object.type) ? person_PhoneTypeFromJSON(object.type) : 0
    }
  },

  toJSON(message: Person_PhoneNumber): unknown {
    const obj: any = {}
    message.number !== undefined && (obj.number = message.number)
    message.type !== undefined && (obj.type = person_PhoneTypeToJSON(message.type))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Person_PhoneNumber>, I>>(object: I): Person_PhoneNumber {
    const message = createBasePerson_PhoneNumber()
    message.number = object.number ?? ''
    message.type = object.type ?? 0
    return message
  }
}

function createBaseAddressBook(): AddressBook {
  return { people: [] }
}

export const AddressBook = {
  encode(message: AddressBook, writer: Writer = Writer.create()): Writer {
    for (const v of message.people) {
      Person.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): AddressBook {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAddressBook()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.people.push(Person.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): AddressBook {
    return {
      people: Array.isArray(object?.people) ? object.people.map((e: any) => Person.fromJSON(e)) : []
    }
  },

  toJSON(message: AddressBook): unknown {
    const obj: any = {}
    if (message.people) {
      obj.people = message.people.map((e) => (e ? Person.toJSON(e) : undefined))
    } else {
      obj.people = []
    }
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<AddressBook>, I>>(object: I): AddressBook {
    const message = createBaseAddressBook()
    message.people = object.people?.map((e) => Person.fromPartial(e)) || []
    return message
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

type KeysOfUnion<T> = T extends T ? keyof T : never
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
