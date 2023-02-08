"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListPlaceIndexes = void 0;
const ListPlaceIndexesCommand_1 = require("../commands/ListPlaceIndexesCommand");
const Location_1 = require("../Location");
const LocationClient_1 = require("../LocationClient");
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListPlaceIndexesCommand_1.ListPlaceIndexesCommand(input), ...args);
};
const makePagedRequest = async (client, input, ...args) => {
    return await client.listPlaceIndexes(input, ...args);
};
async function* paginateListPlaceIndexes(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof Location_1.Location) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof LocationClient_1.LocationClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Location | LocationClient");
        }
        yield page;
        const prevToken = token;
        token = page.NextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateListPlaceIndexes = paginateListPlaceIndexes;
