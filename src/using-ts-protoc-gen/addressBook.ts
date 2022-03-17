import { AddressBook } from '../../generated/using-ts-protoc-gen/src/proto/addressBook_pb'

export function newAddressBookMsg(): AddressBook {
  const myAddressBook = new AddressBook()

  const person1 = myAddressBook.addPeople()
  person1.setName('Joe Blogs')
  const person1Phone1 = person1.addPhones()
  person1Phone1.setNumber('0123456789')
  person1Phone1.setType(0)

  const person2 = myAddressBook.addPeople()
  person2.setName('Jane Smith')
  const person2Phone2 = person2.addPhones()
  person2Phone2.setNumber('0987654321')
  person2Phone2.setType(1)

  return myAddressBook
}

export function serializeMsgToProto(myAddressBook: AddressBook): Uint8Array {
  return myAddressBook.serializeBinary()
}

export function deserializeProtoToMsg(proto: Uint8Array): AddressBook {
  return AddressBook.deserializeBinary(proto)
}
