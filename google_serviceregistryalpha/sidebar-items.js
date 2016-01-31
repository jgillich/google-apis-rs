initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["Endpoint","There is no detailed description."],["EndpointDeleteCall","Deletes an endpoint."],["EndpointEndpointVisibility","There is no detailed description."],["EndpointGetCall","Gets an endpoint."],["EndpointInsertCall","Creates an endpoint."],["EndpointListCall","Lists endpoints for a project."],["EndpointMethods","A builder providing access to all methods supported on *endpoint* resources. It is not used directly, but through the `ServiceRegistry` hub."],["EndpointPatchCall","Updates an endpoint. This method supports patch semantics."],["EndpointUpdateCall","Updates an endpoint."],["EndpointsListResponse","A response containing a partial list of Endpoints and a page token used to build the next request if the request has been truncated. Next available tag: 5"],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Operation","An Operation resource, used to manage asynchronous API requests."],["OperationError","[Output Only] If errors are generated during processing of the operation, this field will be populated."],["OperationErrorErrors","[Output Only] The array of errors encountered while processing this operation."],["OperationGetCall","Gets information about a specific operation."],["OperationListCall","Lists all operations for a project."],["OperationMethods","A builder providing access to all methods supported on *operation* resources. It is not used directly, but through the `ServiceRegistry` hub."],["OperationWarnings","[Output Only] If warning messages are generated during processing of the operation, this field will be populated."],["OperationWarningsData","[Output Only] Metadata about this warning in key: value format. For example: \"data\": [ { \"key\": \"scope\", \"value\": \"zones/us-east1-d\" }"],["OperationsListResponse","A response containing a partial list of operations and a page token used to build the next request if the request has been truncated."],["ServiceRegistry","Central instance to access all ServiceRegistry related resource activities"]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a *parts* string"]],"type":[["Result","A universal result type used as return for all calls."]]});