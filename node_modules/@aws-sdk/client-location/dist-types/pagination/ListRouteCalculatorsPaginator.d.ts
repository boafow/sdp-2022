import { Paginator } from "@aws-sdk/types";
import { ListRouteCalculatorsCommandInput, ListRouteCalculatorsCommandOutput } from "../commands/ListRouteCalculatorsCommand";
import { LocationPaginationConfiguration } from "./Interfaces";
export declare function paginateListRouteCalculators(config: LocationPaginationConfiguration, input: ListRouteCalculatorsCommandInput, ...additionalArguments: any): Paginator<ListRouteCalculatorsCommandOutput>;
