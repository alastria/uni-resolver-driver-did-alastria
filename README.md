![Alastria Logo](https://alastria.io/wp-content/uploads/2018/09/Marca-Alastria-Principal-H-1-300x90.png)


# Overview

This is a [Universal Resolver](https://github.com/decentralized-identity/universal-resolver/) driver for [AlastriaID](https://github.com/alastria/alastria-identity/wiki), the self-sovereign identity initiative by [Alastria](https://alastria.io/) Consortium. This project provides an implementation for **did:ala:quor** identifiers, for **MPV2** version of AlastriaID in [AlastriaT network](https://github.com/alastria/alastria-node-quorum).

The result it's a document with this parts:

 - Context: Alastria uses the DID Spech from https://www.w3.org/ns/did/v1
 - ID: DID from the Subject
 - Public Key: Public keys from the Subject. More information in AlastriaID [Wiki](https://github.com/alastria/alastria-identity/wiki/Alastria-DID-Method-Specification#223-public-keys)

### Example DIDs

```
did:ala:quor:redT:706b3e4611a855b8b1267c4e9f0c77124af003fe
did:ala:quor:redT:3729a1872356dd5c5ac377c85d539fe63cb561d8
did:ala:quor:redT:ec27f358fd0d11d8934ceb51305622ae79b6ad15
```
### Build and Run

```sh
docker build -f Dockerfile src -t alastria/uni-resolver-driver-did-alastria
docker run -d -p 8080:8080 alastria/uni-resolver-driver-did-alastria:latest
curl -X GET http://localhost:8080/1.0/identifiers/did:ala:quor:redT:ec27f358fd0d11d8934ceb51305622ae79b6ad15
```
