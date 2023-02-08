import { Paginator } from "@aws-sdk/types";
import { GetDevicePositionHistoryCommandInput, GetDevicePositionHistoryCommandOutput } from "../commands/GetDevicePositionHistoryCommand";
import { LocationPaginationConfiguration } from "./Interfaces";
export declare function paginateGetDevicePositionHistory(config: LocationPaginationConfiguration, input: GetDevicePositionHistoryCommandInput, ...additionalArguments: any): Paginator<GetDevicePositionHistoryCommandOutput>;
