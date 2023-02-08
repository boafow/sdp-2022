import { Paginator } from "@aws-sdk/types";
import { ListMapsCommandInput, ListMapsCommandOutput } from "../commands/ListMapsCommand";
import { LocationPaginationConfiguration } from "./Interfaces";
export declare function paginateListMaps(config: LocationPaginationConfiguration, input: ListMapsCommandInput, ...additionalArguments: any): Paginator<ListMapsCommandOutput>;
