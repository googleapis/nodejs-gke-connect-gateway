// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as gatewayserviceModule from '../src';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
    const filledObject = (instance.constructor as typeof protobuf.Message)
        .toObject(instance as protobuf.Message<T>, {defaults: true});
    return (instance.constructor as typeof protobuf.Message).fromObject(filledObject) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().rejects(error) : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().callsArgWith(2, error) : sinon.stub().callsArgWith(2, null, response);
}

describe('v1beta1.GatewayServiceClient', () => {
    describe('Common methods', () => {
        it('has servicePath', () => {
            const servicePath = gatewayserviceModule.v1beta1.GatewayServiceClient.servicePath;
            assert(servicePath);
        });

        it('has apiEndpoint', () => {
            const apiEndpoint = gatewayserviceModule.v1beta1.GatewayServiceClient.apiEndpoint;
            assert(apiEndpoint);
        });

        it('has port', () => {
            const port = gatewayserviceModule.v1beta1.GatewayServiceClient.port;
            assert(port);
            assert(typeof port === 'number');
        });

        it('should create a client with no option', () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient();
            assert(client);
        });

        it('should create a client with gRPC fallback', () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
                fallback: true,
            });
            assert(client);
        });

        it('has initialize method and supports deferred initialization', async () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.gatewayServiceStub, undefined);
            await client.initialize();
            assert(client.gatewayServiceStub);
        });

        it('has close method for the initialized client', done => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            assert(client.gatewayServiceStub);
            client.close().then(() => {
                done();
            });
        });

        it('has close method for the non-initialized client', done => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.gatewayServiceStub, undefined);
            client.close().then(() => {
                done();
            });
        });

        it('has getProjectId method', async () => {
            const fakeProjectId = 'fake-project-id';
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
            const result = await client.getProjectId();
            assert.strictEqual(result, fakeProjectId);
            assert((client.auth.getProjectId as SinonStub).calledWithExactly());
        });

        it('has getProjectId method with callback', async () => {
            const fakeProjectId = 'fake-project-id';
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.auth.getProjectId = sinon.stub().callsArgWith(0, null, fakeProjectId);
            const promise = new Promise((resolve, reject) => {
                client.getProjectId((err?: Error|null, projectId?: string|null) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(projectId);
                    }
                });
            });
            const result = await promise;
            assert.strictEqual(result, fakeProjectId);
        });
    });

    describe('getResource', () => {
        it('invokes getResource without error', async () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.HttpBody());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.api.HttpBody());
            client.innerApiCalls.getResource = stubSimpleCall(expectedResponse);
            const [response] = await client.getResource(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getResource as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes getResource without error using callback', async () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.HttpBody());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.api.HttpBody());
            client.innerApiCalls.getResource = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.getResource(
                    request,
                    (err?: Error|null, result?: protos.google.api.IHttpBody|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getResource as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes getResource with error', async () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.HttpBody());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedError = new Error('expected');
            client.innerApiCalls.getResource = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.getResource(request), expectedError);
            assert((client.innerApiCalls.getResource as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes getResource with closed client', async () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.HttpBody());
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.getResource(request), expectedError);
        });
    });

    describe('postResource', () => {
        it('invokes postResource without error', async () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.HttpBody());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.api.HttpBody());
            client.innerApiCalls.postResource = stubSimpleCall(expectedResponse);
            const [response] = await client.postResource(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.postResource as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes postResource without error using callback', async () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.HttpBody());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.api.HttpBody());
            client.innerApiCalls.postResource = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.postResource(
                    request,
                    (err?: Error|null, result?: protos.google.api.IHttpBody|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.postResource as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes postResource with error', async () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.HttpBody());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedError = new Error('expected');
            client.innerApiCalls.postResource = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.postResource(request), expectedError);
            assert((client.innerApiCalls.postResource as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes postResource with closed client', async () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.HttpBody());
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.postResource(request), expectedError);
        });
    });

    describe('deleteResource', () => {
        it('invokes deleteResource without error', async () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.HttpBody());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.api.HttpBody());
            client.innerApiCalls.deleteResource = stubSimpleCall(expectedResponse);
            const [response] = await client.deleteResource(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.deleteResource as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes deleteResource without error using callback', async () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.HttpBody());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.api.HttpBody());
            client.innerApiCalls.deleteResource = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.deleteResource(
                    request,
                    (err?: Error|null, result?: protos.google.api.IHttpBody|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.deleteResource as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes deleteResource with error', async () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.HttpBody());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedError = new Error('expected');
            client.innerApiCalls.deleteResource = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.deleteResource(request), expectedError);
            assert((client.innerApiCalls.deleteResource as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes deleteResource with closed client', async () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.HttpBody());
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.deleteResource(request), expectedError);
        });
    });

    describe('putResource', () => {
        it('invokes putResource without error', async () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.HttpBody());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.api.HttpBody());
            client.innerApiCalls.putResource = stubSimpleCall(expectedResponse);
            const [response] = await client.putResource(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.putResource as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes putResource without error using callback', async () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.HttpBody());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.api.HttpBody());
            client.innerApiCalls.putResource = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.putResource(
                    request,
                    (err?: Error|null, result?: protos.google.api.IHttpBody|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.putResource as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes putResource with error', async () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.HttpBody());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedError = new Error('expected');
            client.innerApiCalls.putResource = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.putResource(request), expectedError);
            assert((client.innerApiCalls.putResource as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes putResource with closed client', async () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.HttpBody());
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.putResource(request), expectedError);
        });
    });

    describe('patchResource', () => {
        it('invokes patchResource without error', async () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.HttpBody());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.api.HttpBody());
            client.innerApiCalls.patchResource = stubSimpleCall(expectedResponse);
            const [response] = await client.patchResource(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.patchResource as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes patchResource without error using callback', async () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.HttpBody());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.api.HttpBody());
            client.innerApiCalls.patchResource = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.patchResource(
                    request,
                    (err?: Error|null, result?: protos.google.api.IHttpBody|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.patchResource as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes patchResource with error', async () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.HttpBody());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedError = new Error('expected');
            client.innerApiCalls.patchResource = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.patchResource(request), expectedError);
            assert((client.innerApiCalls.patchResource as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes patchResource with closed client', async () => {
            const client = new gatewayserviceModule.v1beta1.GatewayServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.api.HttpBody());
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.patchResource(request), expectedError);
        });
    });
});
