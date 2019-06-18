#!/usr/bin/env ts-node

import Photon from '@generated/photon/20190618110220-optional-fullname'

async function main() {
  const photon = new Photon()

  for await (const user of photon.users.findMany().$stream()) {
    await photon.updateUser({
      ...user,
      fullName: `${user.firstName} ${user.lastName}`
    })
  }

}

main()