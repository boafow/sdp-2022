import { Paginator } from "@aws-sdk/types";
import { ListPlaceIndexesCommandInput, ListPlaceIndexesCommandOutput } from "../commands/ListPlaceIndexesCommand";
import { LocationPaginationConfiguration } from "./Interfaces";
export declare function paginateListPlaceIndexes(config: LocationPaginationConfiguration, input: ListPlaceIndexesCommandInput, ...additionalArguments: any): Paginator<ListPlaceIndexesCommandOutput>;
