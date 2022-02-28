import { AddressBook } from '../generated/src/proto/addressBook_pb'

export function newAddressBookMsg(): AddressBook {
  const addressBook = new AddressBook()
  const newPerson = addressBook.addPeople()
  newPerson.setId(1234)
  newPerson.setName('Mr J Blogs')
  return addressBook
}

export function serializeMsgToProto(msg: AddressBook): Uint8Array {
  return msg.serializeBinary()
}

export function deserializeProtoToMsg(proto: Uint8Array): AddressBook {
  return AddressBook.deserializeBinary(proto)
}
