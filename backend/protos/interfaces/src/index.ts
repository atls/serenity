import * as grpc      from 'grpc'
import { Observable } from 'rxjs'
/** Namespace common. */
export namespace common {
  /** Contains all the RPC service clients. */
  export interface ClientFactory {}

  /** Builder for an RPC service server. */
  export interface ServerBuilder {}

  /** Properties of an Empty. */
  export interface Empty {}

  /** Properties of a Pager. */
  export interface Pager {
    /** Pager take */
    take?: number | null

    /** Pager offset */
    offset?: number | null
  }

  /** Properties of an Order. */
  export interface Order {
    /** Order by */
    by?: string | null

    /** Order direction */
    direction?: string | null
  }

  /** Properties of a PageInfo. */
  export interface PageInfo {
    /** PageInfo hasNext */
    hasNext?: boolean | null
  }
}

/** Namespace catalog. */
export namespace catalog {
  /** Contains all the RPC service clients. */
  export interface ClientFactory {
    /**
     * Returns the CatalogService service client.
     */
    getCatalogService(): catalog.CatalogService
  }

  /** Builder for an RPC service server. */
  export interface ServerBuilder {
    /**
     * Adds a CatalogService service implementation.
     * @param impl CatalogService service implementation
     */
    addCatalogService(impl: catalog.CatalogService): catalog.ServerBuilder
  }

  /** Constructs a new CatalogService service. */
  export interface CatalogService {
    /**
     * Calls getCategoryGroups.
     * @param request GetCategoryGroupsRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getCategoryGroups(
      request: catalog.GetCategoryGroupsRequest,
      metadata?: grpc.Metadata
    ): Observable<catalog.GetCategoryGroupsResponse>

    /**
     * Calls getCategories.
     * @param request GetCategoriesRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getCategories(
      request: catalog.GetCategoriesRequest,
      metadata?: grpc.Metadata
    ): Observable<catalog.GetCategoriesResponse>

    /**
     * Calls createCategoryGroup.
     * @param request CreateCategoryGroupRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    createCategoryGroup(
      request: catalog.CreateCategoryGroupRequest,
      metadata?: grpc.Metadata
    ): Observable<catalog.CreateCategoryGroupResponse>

    /**
     * Calls updateCategoryGroup.
     * @param request UpdateCategoryGroupRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    updateCategoryGroup(
      request: catalog.UpdateCategoryGroupRequest,
      metadata?: grpc.Metadata
    ): Observable<catalog.UpdateCategoryGroupResponse>

    /**
     * Calls deleteCategoryGroup.
     * @param request DeleteCategoryGroupRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    deleteCategoryGroup(
      request: catalog.DeleteCategoryGroupRequest,
      metadata?: grpc.Metadata
    ): Observable<catalog.DeleteCategoryGroupResponse>

    /**
     * Calls createCategory.
     * @param request CreateCategoryRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    createCategory(
      request: catalog.CreateCategoryRequest,
      metadata?: grpc.Metadata
    ): Observable<catalog.CreateCategoryResponse>

    /**
     * Calls updateCategory.
     * @param request UpdateCategoryRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    updateCategory(
      request: catalog.UpdateCategoryRequest,
      metadata?: grpc.Metadata
    ): Observable<catalog.UpdateCategoryResponse>

    /**
     * Calls deleteCategory.
     * @param request DeleteCategoryRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    deleteCategory(
      request: catalog.DeleteCategoryRequest,
      metadata?: grpc.Metadata
    ): Observable<catalog.DeleteCategoryResponse>
  }

  /** Properties of a Category. */
  export interface Category {
    /** Category id */
    id?: string | null

    /** Category name */
    name?: string | null
  }

  /** Properties of a CategoryGroup. */
  export interface CategoryGroup {
    /** CategoryGroup id */
    id?: string | null

    /** CategoryGroup name */
    name?: string | null

    /** CategoryGroup children */
    children?: catalog.Category[] | null
  }

  /** Properties of a CategoryGroupsFilter. */
  export interface CategoryGroupsFilter {
    /** CategoryGroupsFilter id */
    id?: string[] | null

    /** CategoryGroupsFilter search */
    search?: string | null
  }

  /** Properties of a GetCategoryGroupsRequest. */
  export interface GetCategoryGroupsRequest {
    /** GetCategoryGroupsRequest pager */
    pager?: common.Pager | null

    /** GetCategoryGroupsRequest order */
    order?: common.Order | null

    /** GetCategoryGroupsRequest filters */
    filters?: catalog.CategoryGroupsFilter | null
  }

  /** Properties of a GetCategoryGroupsResponse. */
  export interface GetCategoryGroupsResponse {
    /** GetCategoryGroupsResponse rows */
    rows?: catalog.CategoryGroup[] | null

    /** GetCategoryGroupsResponse pageInfo */
    pageInfo?: common.PageInfo | null
  }

  /** Properties of a CategoriesFilter. */
  export interface CategoriesFilter {
    /** CategoriesFilter id */
    id?: string[] | null

    /** CategoriesFilter search */
    search?: string | null
  }

  /** Properties of a GetCategoriesRequest. */
  export interface GetCategoriesRequest {
    /** GetCategoriesRequest pager */
    pager?: common.Pager | null

    /** GetCategoriesRequest order */
    order?: common.Order | null

    /** GetCategoriesRequest filters */
    filters?: catalog.CategoriesFilter | null
  }

  /** Properties of a GetCategoriesResponse. */
  export interface GetCategoriesResponse {
    /** GetCategoriesResponse rows */
    rows?: catalog.Category[] | null

    /** GetCategoriesResponse pageInfo */
    pageInfo?: common.PageInfo | null
  }

  /** Properties of a CreateCategoryGroupRequest. */
  export interface CreateCategoryGroupRequest {
    /** CreateCategoryGroupRequest name */
    name?: string | null
  }

  /** Properties of a CreateCategoryGroupErrors. */
  export interface CreateCategoryGroupErrors {
    /** CreateCategoryGroupErrors name */
    name?: string | null
  }

  /** Properties of a CreateCategoryGroupResponse. */
  export interface CreateCategoryGroupResponse {
    /** CreateCategoryGroupResponse errors */
    errors?: catalog.CreateCategoryGroupErrors | null

    /** CreateCategoryGroupResponse result */
    result?: catalog.CategoryGroup | null
  }

  /** Properties of an UpdateCategoryGroupRequest. */
  export interface UpdateCategoryGroupRequest {
    /** UpdateCategoryGroupRequest id */
    id?: string | null

    /** UpdateCategoryGroupRequest name */
    name?: string | null
  }

  /** Properties of an UpdateCategoryGroupErrors. */
  export interface UpdateCategoryGroupErrors {
    /** UpdateCategoryGroupErrors id */
    id?: string | null

    /** UpdateCategoryGroupErrors name */
    name?: string | null
  }

  /** Properties of an UpdateCategoryGroupResponse. */
  export interface UpdateCategoryGroupResponse {
    /** UpdateCategoryGroupResponse errors */
    errors?: catalog.UpdateCategoryGroupErrors | null

    /** UpdateCategoryGroupResponse result */
    result?: catalog.CategoryGroup | null
  }

  /** Properties of a DeleteCategoryGroupRequest. */
  export interface DeleteCategoryGroupRequest {
    /** DeleteCategoryGroupRequest id */
    id?: string | null
  }

  /** Properties of a DeleteCategoryGroupErrors. */
  export interface DeleteCategoryGroupErrors {
    /** DeleteCategoryGroupErrors id */
    id?: string | null
  }

  /** Properties of a DeleteCategoryGroupResponse. */
  export interface DeleteCategoryGroupResponse {
    /** DeleteCategoryGroupResponse errors */
    errors?: catalog.DeleteCategoryGroupErrors | null
  }

  /** Properties of a CreateCategoryRequest. */
  export interface CreateCategoryRequest {
    /** CreateCategoryRequest name */
    name?: string | null

    /** CreateCategoryRequest groupId */
    groupId?: string | null
  }

  /** Properties of a CreateCategoryErrors. */
  export interface CreateCategoryErrors {
    /** CreateCategoryErrors name */
    name?: string | null

    /** CreateCategoryErrors groupId */
    groupId?: string | null
  }

  /** Properties of a CreateCategoryResponse. */
  export interface CreateCategoryResponse {
    /** CreateCategoryResponse errors */
    errors?: catalog.CreateCategoryErrors | null

    /** CreateCategoryResponse result */
    result?: catalog.Category | null
  }

  /** Properties of an UpdateCategoryRequest. */
  export interface UpdateCategoryRequest {
    /** UpdateCategoryRequest id */
    id?: string | null

    /** UpdateCategoryRequest name */
    name?: string | null
  }

  /** Properties of an UpdateCategoryErrors. */
  export interface UpdateCategoryErrors {
    /** UpdateCategoryErrors id */
    id?: string | null

    /** UpdateCategoryErrors name */
    name?: string | null
  }

  /** Properties of an UpdateCategoryResponse. */
  export interface UpdateCategoryResponse {
    /** UpdateCategoryResponse errors */
    errors?: catalog.UpdateCategoryErrors | null

    /** UpdateCategoryResponse result */
    result?: catalog.Category | null
  }

  /** Properties of a DeleteCategoryRequest. */
  export interface DeleteCategoryRequest {
    /** DeleteCategoryRequest id */
    id?: string | null
  }

  /** Properties of a DeleteCategoryErrors. */
  export interface DeleteCategoryErrors {
    /** DeleteCategoryErrors id */
    id?: string | null
  }

  /** Properties of a DeleteCategoryResponse. */
  export interface DeleteCategoryResponse {
    /** DeleteCategoryResponse errors */
    errors?: catalog.DeleteCategoryErrors | null
  }
}

/** Namespace mailer. */
export namespace mailer {
  /** Contains all the RPC service clients. */
  export interface ClientFactory {
    /**
     * Returns the MailerService service client.
     */
    getMailerService(): mailer.MailerService
  }

  /** Builder for an RPC service server. */
  export interface ServerBuilder {
    /**
     * Adds a MailerService service implementation.
     * @param impl MailerService service implementation
     */
    addMailerService(impl: mailer.MailerService): mailer.ServerBuilder
  }

  /** Constructs a new MailerService service. */
  export interface MailerService {
    /**
     * Calls getSending.
     * @param request getSendingRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getSending(
      request: mailer.getSendingRequest,
      metadata?: grpc.Metadata
    ): Observable<mailer.Sending>
  }

  /** Properties of a Sending. */
  export interface Sending {
    /** Sending id */
    id?: string | null

    /** Sending template */
    template?: string | null

    /** Sending payload */
    payload?: string | null
  }

  /** Properties of a getSendingRequest. */
  export interface getSendingRequest {
    /** getSendingRequest id */
    id?: string | null
  }
}

/** Namespace identity. */
export namespace identity {
  /** Contains all the RPC service clients. */
  export interface ClientFactory {
    /**
     * Returns the IdentityService service client.
     */
    getIdentityService(): identity.IdentityService
  }

  /** Builder for an RPC service server. */
  export interface ServerBuilder {
    /**
     * Adds a IdentityService service implementation.
     * @param impl IdentityService service implementation
     */
    addIdentityService(impl: identity.IdentityService): identity.ServerBuilder
  }

  /** Constructs a new IdentityService service. */
  export interface IdentityService {
    /**
     * Calls register.
     * @param request RegisterRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    register(
      request: identity.RegisterRequest,
      metadata?: grpc.Metadata
    ): Observable<identity.RegisterResponse>

    /**
     * Calls authenticate.
     * @param request AuthenticateRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    authenticate(
      request: identity.AuthenticateRequest,
      metadata?: grpc.Metadata
    ): Observable<identity.AuthenticateResponse>

    /**
     * Calls verifyEmail.
     * @param request VerifyEmailRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    verifyEmail(
      request: identity.VerifyEmailRequest,
      metadata?: grpc.Metadata
    ): Observable<identity.VerifyEmailResponse>

    /**
     * Calls resetPassword.
     * @param request ResetPasswordRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    resetPassword(
      request: identity.ResetPasswordRequest,
      metadata?: grpc.Metadata
    ): Observable<identity.ResetPasswordResponse>

    /**
     * Calls changePassword.
     * @param request ChangePasswordRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    changePassword(
      request: identity.ChangePasswordRequest,
      metadata?: grpc.Metadata
    ): Observable<identity.ChangePasswordResponse>

    /**
     * Calls createProfile.
     * @param request CreateProfileRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    createProfile(
      request: identity.CreateProfileRequest,
      metadata?: grpc.Metadata
    ): Observable<identity.CreateProfileResponse>

    /**
     * Calls getUsers.
     * @param request GetUsersRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getUsers(
      request: identity.GetUsersRequest,
      metadata?: grpc.Metadata
    ): Observable<identity.GetUsersResponse>

    /**
     * Calls updateProfile.
     * @param request UpdateProfileRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    updateProfile(
      request: identity.UpdateProfileRequest,
      metadata?: grpc.Metadata
    ): Observable<identity.UpdateProfileResponse>
  }

  /** Properties of an Email. */
  export interface Email {
    /** Email address */
    address?: string | null

    /** Email verified */
    verified?: boolean | null
  }

  /** Properties of a PersonalInformation. */
  export interface PersonalInformation {
    /** PersonalInformation firstName */
    firstName?: string | null

    /** PersonalInformation lastName */
    lastName?: string | null
  }

  /** Properties of a Phone. */
  export interface Phone {
    /** Phone number */
    number?: string | null
  }

  /** Properties of an Address. */
  export interface Address {
    /** Address formatted */
    formatted?: string | null
  }

  /** Properties of a ContactInformation. */
  export interface ContactInformation {
    /** ContactInformation phone */
    phone?: identity.Phone | null
  }

  /** Properties of a Photo. */
  export interface Photo {
    /** Photo id */
    id?: string | null
  }

  /** Properties of a Profile. */
  export interface Profile {
    /** Profile type */
    type?: string | null

    /** Profile photo */
    photo?: identity.Photo | null

    /** Profile personalInformation */
    personalInformation?: identity.PersonalInformation | null

    /** Profile contactInformation */
    contactInformation?: identity.ContactInformation | null

    /** Profile address */
    address?: identity.Address | null

    /** Profile website */
    website?: string | null
  }

  /** Properties of a User. */
  export interface User {
    /** User id */
    id?: string | null

    /** User email */
    email?: identity.Email | null

    /** User profile */
    profile?: identity.Profile | null
  }

  /** Properties of a VerifyEmailRequest. */
  export interface VerifyEmailRequest {
    /** VerifyEmailRequest token */
    token?: string | null
  }

  /** Properties of a VerifyEmailErrors. */
  export interface VerifyEmailErrors {
    /** VerifyEmailErrors token */
    token?: string | null
  }

  /** Properties of a VerifyEmailResponse. */
  export interface VerifyEmailResponse {
    /** VerifyEmailResponse errors */
    errors?: identity.VerifyEmailErrors | null

    /** VerifyEmailResponse result */
    result?: identity.User | null
  }

  /** Properties of a RegisterRequest. */
  export interface RegisterRequest {
    /** RegisterRequest email */
    email?: string | null

    /** RegisterRequest password */
    password?: string | null

    /** RegisterRequest confirmPassword */
    confirmPassword?: string | null
  }

  /** Properties of a RegisterErrors. */
  export interface RegisterErrors {
    /** RegisterErrors email */
    email?: string | null

    /** RegisterErrors password */
    password?: string | null

    /** RegisterErrors confirmPassword */
    confirmPassword?: string | null
  }

  /** Properties of a RegisterResponse. */
  export interface RegisterResponse {
    /** RegisterResponse errors */
    errors?: identity.RegisterErrors | null

    /** RegisterResponse result */
    result?: identity.User | null
  }

  /** Properties of an AuthenticateRequest. */
  export interface AuthenticateRequest {
    /** AuthenticateRequest email */
    email?: string | null

    /** AuthenticateRequest password */
    password?: string | null
  }

  /** Properties of an AuthenticateErrors. */
  export interface AuthenticateErrors {
    /** AuthenticateErrors email */
    email?: string | null

    /** AuthenticateErrors password */
    password?: string | null
  }

  /** Properties of an AuthenticateResponse. */
  export interface AuthenticateResponse {
    /** AuthenticateResponse errors */
    errors?: identity.AuthenticateErrors | null

    /** AuthenticateResponse result */
    result?: identity.User | null
  }

  /** Properties of a ResetPasswordRequest. */
  export interface ResetPasswordRequest {
    /** ResetPasswordRequest email */
    email?: string | null
  }

  /** Properties of a ResetPasswordErrors. */
  export interface ResetPasswordErrors {
    /** ResetPasswordErrors email */
    email?: string | null
  }

  /** Properties of a ResetPasswordResponse. */
  export interface ResetPasswordResponse {
    /** ResetPasswordResponse errors */
    errors?: identity.ResetPasswordErrors | null
  }

  /** Properties of a ChangePasswordRequest. */
  export interface ChangePasswordRequest {
    /** ChangePasswordRequest token */
    token?: string | null

    /** ChangePasswordRequest password */
    password?: string | null

    /** ChangePasswordRequest confirmPassword */
    confirmPassword?: string | null
  }

  /** Properties of a ChangePasswordErrors. */
  export interface ChangePasswordErrors {
    /** ChangePasswordErrors token */
    token?: string | null

    /** ChangePasswordErrors password */
    password?: string | null

    /** ChangePasswordErrors confirmPassword */
    confirmPassword?: string | null
  }

  /** Properties of a ChangePasswordResponse. */
  export interface ChangePasswordResponse {
    /** ChangePasswordResponse errors */
    errors?: identity.ChangePasswordErrors | null

    /** ChangePasswordResponse result */
    result?: identity.User | null
  }

  /** Properties of a CreateProfileRequest. */
  export interface CreateProfileRequest {
    /** CreateProfileRequest id */
    id?: string | null

    /** CreateProfileRequest type */
    type?: string | null

    /** CreateProfileRequest firstName */
    firstName?: string | null

    /** CreateProfileRequest lastName */
    lastName?: string | null
  }

  /** Properties of a CreateProfileErrors. */
  export interface CreateProfileErrors {
    /** CreateProfileErrors id */
    id?: string | null

    /** CreateProfileErrors type */
    type?: string | null

    /** CreateProfileErrors firstName */
    firstName?: string | null

    /** CreateProfileErrors lastName */
    lastName?: string | null
  }

  /** Properties of a CreateProfileResponse. */
  export interface CreateProfileResponse {
    /** CreateProfileResponse errors */
    errors?: identity.CreateProfileErrors | null

    /** CreateProfileResponse result */
    result?: identity.User | null
  }

  /** Properties of a UsersFilter. */
  export interface UsersFilter {
    /** UsersFilter id */
    id?: string[] | null
  }

  /** Properties of a GetUsersRequest. */
  export interface GetUsersRequest {
    /** GetUsersRequest pager */
    pager?: common.Pager | null

    /** GetUsersRequest order */
    order?: common.Order | null

    /** GetUsersRequest filters */
    filters?: identity.UsersFilter | null
  }

  /** Properties of a GetUsersResponse. */
  export interface GetUsersResponse {
    /** GetUsersResponse rows */
    rows?: identity.User[] | null

    /** GetUsersResponse pageInfo */
    pageInfo?: common.PageInfo | null
  }

  /** Properties of an UpdateProfileRequest. */
  export interface UpdateProfileRequest {
    /** UpdateProfileRequest id */
    id?: string | null

    /** UpdateProfileRequest firstName */
    firstName?: string | null

    /** UpdateProfileRequest lastName */
    lastName?: string | null

    /** UpdateProfileRequest phone */
    phone?: string | null

    /** UpdateProfileRequest photoId */
    photoId?: string | null

    /** UpdateProfileRequest address */
    address?: string | null

    /** UpdateProfileRequest website */
    website?: string | null
  }

  /** Properties of an UpdateProfileErrors. */
  export interface UpdateProfileErrors {
    /** UpdateProfileErrors id */
    id?: string | null

    /** UpdateProfileErrors firstName */
    firstName?: string | null

    /** UpdateProfileErrors lastName */
    lastName?: string | null

    /** UpdateProfileErrors phone */
    phone?: string | null

    /** UpdateProfileErrors photoId */
    photoId?: string | null

    /** UpdateProfileErrors address */
    address?: string | null

    /** UpdateProfileErrors website */
    website?: string | null
  }

  /** Properties of an UpdateProfileResponse. */
  export interface UpdateProfileResponse {
    /** UpdateProfileResponse errors */
    errors?: identity.UpdateProfileErrors | null

    /** UpdateProfileResponse result */
    result?: identity.Profile | null
  }
}

/** Namespace files. */
export namespace files {
  /** Contains all the RPC service clients. */
  export interface ClientFactory {
    /**
     * Returns the FilesService service client.
     */
    getFilesService(): files.FilesService
  }

  /** Builder for an RPC service server. */
  export interface ServerBuilder {
    /**
     * Adds a FilesService service implementation.
     * @param impl FilesService service implementation
     */
    addFilesService(impl: files.FilesService): files.ServerBuilder
  }

  /** Constructs a new FilesService service. */
  export interface FilesService {
    /**
     * Calls getFiles.
     * @param request GetFilesRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getFiles(
      request: files.GetFilesRequest,
      metadata?: grpc.Metadata
    ): Observable<files.GetFilesResponse>

    /**
     * Calls createUpload.
     * @param request CreateUploadRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    createUpload(
      request: files.CreateUploadRequest,
      metadata?: grpc.Metadata
    ): Observable<files.CreateUploadResponse>

    /**
     * Calls confirmUpload.
     * @param request ConfirmUploadRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    confirmUpload(
      request: files.ConfirmUploadRequest,
      metadata?: grpc.Metadata
    ): Observable<files.ConfirmUploadResponse>
  }

  /** Properties of a FilesFilter. */
  export interface FilesFilter {
    /** FilesFilter id */
    id?: string[] | null
  }

  /** Properties of a File. */
  export interface File {
    /** File id */
    id?: string | null

    /** File url */
    url?: string | null
  }

  /** Properties of an UploadField. */
  export interface UploadField {
    /** UploadField key */
    key?: string | null

    /** UploadField value */
    value?: string | null
  }

  /** Properties of an Upload. */
  export interface Upload {
    /** Upload id */
    id?: string | null

    /** Upload url */
    url?: string | null

    /** Upload fields */
    fields?: files.UploadField[] | null
  }

  /** Properties of a CreateUploadRequest. */
  export interface CreateUploadRequest {
    /** CreateUploadRequest type */
    type?: string | null

    /** CreateUploadRequest name */
    name?: string | null
  }

  /** Properties of a CreateUploadResponse. */
  export interface CreateUploadResponse {
    /** CreateUploadResponse result */
    result?: files.Upload | null
  }

  /** Properties of a ConfirmUploadRequest. */
  export interface ConfirmUploadRequest {
    /** ConfirmUploadRequest id */
    id?: string | null
  }

  /** Properties of a ConfirmUploadResponse. */
  export interface ConfirmUploadResponse {
    /** ConfirmUploadResponse result */
    result?: files.File | null
  }

  /** Properties of a GetFilesRequest. */
  export interface GetFilesRequest {
    /** GetFilesRequest pager */
    pager?: common.Pager | null

    /** GetFilesRequest order */
    order?: common.Order | null

    /** GetFilesRequest filters */
    filters?: files.FilesFilter | null
  }

  /** Properties of a GetFilesResponse. */
  export interface GetFilesResponse {
    /** GetFilesResponse rows */
    rows?: files.File[] | null

    /** GetFilesResponse pageInfo */
    pageInfo?: common.PageInfo | null
  }
}