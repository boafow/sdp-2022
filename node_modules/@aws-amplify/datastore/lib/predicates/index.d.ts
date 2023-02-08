import { ModelPredicate, PersistentModel, PredicatesGroup, ProducerModelPredicate, SchemaModel } from '../types';
export { ModelSortPredicateCreator } from './sort';
export declare function isPredicatesAll(predicate: any): predicate is typeof PredicateAll;
export declare const comparisonKeys: Set<string>;
export declare const PredicateAll: unique symbol;
export declare class Predicates {
    static get ALL(): typeof PredicateAll;
}
export declare class ModelPredicateCreator {
    private static predicateGroupsMap;
    static createPredicateBuilder<T extends PersistentModel>(modelDefinition: SchemaModel): ModelPredicate<T>;
    static isValidPredicate<T extends PersistentModel>(predicate: any): predicate is ModelPredicate<T>;
    static getPredicates<T extends PersistentModel>(predicate: ModelPredicate<T>, throwOnInvalid?: boolean): PredicatesGroup<any>;
    static createFromExisting<T extends PersistentModel>(modelDefinition?: SchemaModel, existing?: ProducerModelPredicate<T>): ModelPredicate<T>;
    static createForSingleField<T extends PersistentModel>(modelDefinition: SchemaModel, fieldName: string, value: string): ModelPredicate<T>;
    static createForPk<T extends PersistentModel>(modelDefinition: SchemaModel, model: T): ModelPredicate<T>;
    /**
     * Searches a `Model` table for records matching the given equalities object.
     *
     * This only matches against fields given in the equalities object. No other
     * fields are tested by the predicate.
     *
     * @param modelDefinition The model we need a predicate for.
     * @param flatEqualities An object holding field equalities to search for.
     */
    static createFromFlatEqualities<T extends PersistentModel>(modelDefinition: SchemaModel, flatEqualities: Record<string, any>): ModelPredicate<T>;
    static createGroupFromExisting<T extends PersistentModel>(modelDefinition: SchemaModel, group: 'and' | 'or' | 'not', existingPredicates: (ProducerModelPredicate<T> | ModelPredicate<T>)[]): ModelPredicate<T>;
    static transformGraphQLtoPredicateAST(gql: any): any;
    static createFromAST(modelDefinition: SchemaModel, ast: any): ModelPredicate<any>;
}
