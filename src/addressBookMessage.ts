import { AddressBook, Person_PhoneType } from './generated/src/proto/addressBook'

export function newAddressBookMsg(): AddressBook {
  const myAddressBook: AddressBook = {
    people: [
      {
        name: 'Joe Blogs',
        phones: [
          {
            phoneNumber: '0123456789',
            phoneType: Person_PhoneType.MOBILE
          }
        ]
      },
      {
        name: 'Jane Smith',
        phones: [
          {
            phoneNumber: '0987654321',
            phoneType: Person_PhoneType.HOME
          }
        ]
      }
    ]
  }
  return myAddressBook
}

export function serializeMsgToProto(myAddressBook: AddressBook): Uint8Array {
  return AddressBook.encode(myAddressBook).finish()
}

export function deserializeProtoToMsg(proto: Uint8Array): AddressBook {
  return AddressBook.decode(proto)
}
