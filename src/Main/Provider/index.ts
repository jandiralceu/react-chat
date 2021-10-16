import 'reflect-metadata'
import { Container } from 'inversify'
import { RemoteAuthentication } from '@/Application/UseCases'

const container = new Container()

container.bind(RemoteAuthentication).toSelf()

export { container }
