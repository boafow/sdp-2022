import { ModelInstanceCreator } from '../../datastore/datastore';
import { InternalSchema, ModelInstanceMetadata, ModelPredicate, NamespaceResolver, OpType, PaginationInput, PersistentModel, PersistentModelConstructor, QueryOne } from '../../types';
import { NAMESPACES } from '../../util';
import { Adapter } from './index';
declare class IndexedDBAdapter implements Adapter {
    private schema;
    private namespaceResolver;
    private modelInstanceCreator;
    private getModelConstructorByModelName?;
    private db;
    private initPromise;
    private resolve;
    private reject;
    private dbName;
    private safariCompatabilityMode;
    private getStorenameForModel;
    private getIndexKeyValuesFromModel;
    private checkPrivate;
    /**
     * Whether the browser's implementation of IndexedDB is coercing single-field
     * indexes to a scalar key.
     *
     * If this returns `true`, we need to treat indexes containing a single field
     * as scalars.
     *
     * See PR description for reference:
     * https://github.com/aws-amplify/amplify-js/pull/10527
     */
    private setSafariCompatabilityMode;
    private getNamespaceAndModelFromStorename;
    setUp(theSchema: InternalSchema, namespaceResolver: NamespaceResolver, modelInstanceCreator: ModelInstanceCreator, getModelConstructorByModelName: (namsespaceName: NAMESPACES, modelName: string) => PersistentModelConstructor<any>, sessionId?: string): Promise<void>;
    private _get;
    save<T extends PersistentModel>(model: T, condition?: ModelPredicate<T>): Promise<[T, OpType.INSERT | OpType.UPDATE][]>;
    private load;
    query<T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, predicate?: ModelPredicate<T>, pagination?: PaginationInput<T>): Promise<T[]>;
    private getByKey;
    private getAll;
    private keyValueFromPredicate;
    /**
     * Tries to generate an index fetcher for the given predicates. Assumes
     * that the given predicate conditions are contained by an AND group and
     * should therefore all match a single record.
     *
     * @param storeName The table to query.
     * @param predicates The predicates to try to AND together.
     * @param transaction
     */
    private matchingIndexQueries;
    private baseQueryIndex;
    private filterOnPredicate;
    private inMemoryPagination;
    private enginePagination;
    queryOne<T extends PersistentModel>(modelConstructor: PersistentModelConstructor<T>, firstOrLast?: QueryOne): Promise<T | undefined>;
    delete<T extends PersistentModel>(modelOrModelConstructor: T | PersistentModelConstructor<T>, condition?: ModelPredicate<T>): Promise<[T[], T[]]>;
    private deleteItem;
    private deleteTraverse;
    clear(): Promise<void>;
    batchSave<T extends PersistentModel>(modelConstructor: PersistentModelConstructor<any>, items: ModelInstanceMetadata[]): Promise<[T, OpType][]>;
    private createObjectStoreForModel;
    /**
     * Checks the given path against the browser's IndexedDB implementation for
     * necessary compatibility transformations, applying those transforms if needed.
     *
     * @param `keyArr` strings to compatibilize for browser-indexeddb index operations
     * @returns An array or string, depending on and given key,
     * that is ensured to be compatible with the IndexedDB implementation's nuances.
     */
    private canonicalKeyPath;
}
declare const _default: IndexedDBAdapter;
export default _default;
