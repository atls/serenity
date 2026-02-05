/* eslint-disable */
import * as grpc from "@grpc/grpc-js";
import { Observable } from "rxjs";
import {
  Metadata,
  ClientUnaryCall,
  ServiceError,
  ClientReadableStream,
  CallOptions,
  handleUnaryCall,
  UntypedServiceImplementation,
  Client,
} from "@grpc/grpc-js";

export interface Category {
  id: string;
  name: string;
}

export interface CategoryGroup {
  id: string;
  name: string;
  children: Category[];
}

export interface CategoryGroupsFilter {
  id: string[];
  search: string;
}

export interface GetCategoryGroupsRequest {
  pager: Pager | undefined;
  order: Order | undefined;
  filters: CategoryGroupsFilter | undefined;
}

export interface GetCategoryGroupsResponse {
  rows: CategoryGroup[];
  pageInfo: PageInfo | undefined;
}

export interface CategoriesFilter {
  id: string[];
  search: string;
}

export interface GetCategoriesRequest {
  pager: Pager | undefined;
  order: Order | undefined;
  filters: CategoriesFilter | undefined;
}

export interface GetCategoriesResponse {
  rows: Category[];
  pageInfo: PageInfo | undefined;
}

export interface CreateCategoryGroupRequest {
  name: string;
}

export interface CreateCategoryGroupErrors {
  name: string;
}

export interface CreateCategoryGroupResponse {
  errors: CreateCategoryGroupErrors | undefined;
  result: CategoryGroup | undefined;
}

export interface UpdateCategoryGroupRequest {
  id: string;
  name: string;
}

export interface UpdateCategoryGroupErrors {
  id: string;
  name: string;
}

export interface UpdateCategoryGroupResponse {
  errors: UpdateCategoryGroupErrors | undefined;
  result: CategoryGroup | undefined;
}

export interface DeleteCategoryGroupRequest {
  id: string;
}

export interface DeleteCategoryGroupErrors {
  id: string;
}

export interface DeleteCategoryGroupResponse {
  errors: DeleteCategoryGroupErrors | undefined;
}

export interface CreateCategoryRequest {
  name: string;
  groupId: string;
}

export interface CreateCategoryErrors {
  name: string;
  groupId: string;
}

export interface CreateCategoryResponse {
  errors: CreateCategoryErrors | undefined;
  result: Category | undefined;
}

export interface UpdateCategoryRequest {
  id: string;
  name: string;
}

export interface UpdateCategoryErrors {
  id: string;
  name: string;
}

export interface UpdateCategoryResponse {
  errors: UpdateCategoryErrors | undefined;
  result: Category | undefined;
}

export interface DeleteCategoryRequest {
  id: string;
}

export interface DeleteCategoryErrors {
  id: string;
}

export interface DeleteCategoryResponse {
  errors: DeleteCategoryErrors | undefined;
}

export interface CatalogServiceServer extends UntypedServiceImplementation {
  getCategoryGroups: handleUnaryCall<
    GetCategoryGroupsRequest,
    GetCategoryGroupsResponse
  >;
  getCategories: handleUnaryCall<GetCategoriesRequest, GetCategoriesResponse>;
  createCategoryGroup: handleUnaryCall<
    CreateCategoryGroupRequest,
    CreateCategoryGroupResponse
  >;
  updateCategoryGroup: handleUnaryCall<
    UpdateCategoryGroupRequest,
    UpdateCategoryGroupResponse
  >;
  deleteCategoryGroup: handleUnaryCall<
    DeleteCategoryGroupRequest,
    DeleteCategoryGroupResponse
  >;
  createCategory: handleUnaryCall<
    CreateCategoryRequest,
    CreateCategoryResponse
  >;
  updateCategory: handleUnaryCall<
    UpdateCategoryRequest,
    UpdateCategoryResponse
  >;
  deleteCategory: handleUnaryCall<
    DeleteCategoryRequest,
    DeleteCategoryResponse
  >;
}

export interface CatalogServiceClient extends Client {
  getCategoryGroups(
    request: GetCategoryGroupsRequest,
    callback: (
      error: ServiceError | null,
      response: GetCategoryGroupsResponse
    ) => void
  ): ClientUnaryCall;
  getCategoryGroups(
    request: GetCategoryGroupsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetCategoryGroupsResponse
    ) => void
  ): ClientUnaryCall;
  getCategoryGroups(
    request: GetCategoryGroupsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetCategoryGroupsResponse
    ) => void
  ): ClientUnaryCall;
  getCategories(
    request: GetCategoriesRequest,
    callback: (
      error: ServiceError | null,
      response: GetCategoriesResponse
    ) => void
  ): ClientUnaryCall;
  getCategories(
    request: GetCategoriesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetCategoriesResponse
    ) => void
  ): ClientUnaryCall;
  getCategories(
    request: GetCategoriesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetCategoriesResponse
    ) => void
  ): ClientUnaryCall;
  createCategoryGroup(
    request: CreateCategoryGroupRequest,
    callback: (
      error: ServiceError | null,
      response: CreateCategoryGroupResponse
    ) => void
  ): ClientUnaryCall;
  createCategoryGroup(
    request: CreateCategoryGroupRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CreateCategoryGroupResponse
    ) => void
  ): ClientUnaryCall;
  createCategoryGroup(
    request: CreateCategoryGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CreateCategoryGroupResponse
    ) => void
  ): ClientUnaryCall;
  updateCategoryGroup(
    request: UpdateCategoryGroupRequest,
    callback: (
      error: ServiceError | null,
      response: UpdateCategoryGroupResponse
    ) => void
  ): ClientUnaryCall;
  updateCategoryGroup(
    request: UpdateCategoryGroupRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: UpdateCategoryGroupResponse
    ) => void
  ): ClientUnaryCall;
  updateCategoryGroup(
    request: UpdateCategoryGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: UpdateCategoryGroupResponse
    ) => void
  ): ClientUnaryCall;
  deleteCategoryGroup(
    request: DeleteCategoryGroupRequest,
    callback: (
      error: ServiceError | null,
      response: DeleteCategoryGroupResponse
    ) => void
  ): ClientUnaryCall;
  deleteCategoryGroup(
    request: DeleteCategoryGroupRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: DeleteCategoryGroupResponse
    ) => void
  ): ClientUnaryCall;
  deleteCategoryGroup(
    request: DeleteCategoryGroupRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: DeleteCategoryGroupResponse
    ) => void
  ): ClientUnaryCall;
  createCategory(
    request: CreateCategoryRequest,
    callback: (
      error: ServiceError | null,
      response: CreateCategoryResponse
    ) => void
  ): ClientUnaryCall;
  createCategory(
    request: CreateCategoryRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CreateCategoryResponse
    ) => void
  ): ClientUnaryCall;
  createCategory(
    request: CreateCategoryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CreateCategoryResponse
    ) => void
  ): ClientUnaryCall;
  updateCategory(
    request: UpdateCategoryRequest,
    callback: (
      error: ServiceError | null,
      response: UpdateCategoryResponse
    ) => void
  ): ClientUnaryCall;
  updateCategory(
    request: UpdateCategoryRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: UpdateCategoryResponse
    ) => void
  ): ClientUnaryCall;
  updateCategory(
    request: UpdateCategoryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: UpdateCategoryResponse
    ) => void
  ): ClientUnaryCall;
  deleteCategory(
    request: DeleteCategoryRequest,
    callback: (
      error: ServiceError | null,
      response: DeleteCategoryResponse
    ) => void
  ): ClientUnaryCall;
  deleteCategory(
    request: DeleteCategoryRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: DeleteCategoryResponse
    ) => void
  ): ClientUnaryCall;
  deleteCategory(
    request: DeleteCategoryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: DeleteCategoryResponse
    ) => void
  ): ClientUnaryCall;
}

export interface ProjectsFilter {
  id: string[];
  customerId: string[];
}

export interface GetProjectsRequest {
  pager: Pager | undefined;
  order: Order | undefined;
  filters: ProjectsFilter | undefined;
}

export interface GetProjectsResponse {
  rows: Project[];
  pageInfo: PageInfo | undefined;
}

export interface Address {
  formatted: string;
}

export interface Customer {
  id: string;
  openProjects: number;
  completedProjects: number;
}

export interface Interaction {
  formOfWork: string;
  numberOfEmployees: string;
  name: string;
}

export interface Specialisation {
  main: string[];
  additional: string[];
}

export interface Account {
  type: string;
  replyLimited: boolean;
}

export interface Specialist {
  id: string;
  interaction: Interaction | undefined;
  specialisation: Specialisation | undefined;
  description: string;
  rating: number;
  reviewCount: number;
  completedProjects: number;
  account: Account | undefined;
}

export interface Project {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  photos: string[];
  address: Address | undefined;
  beginningOfWork: string;
  budget: number;
  legalEntitiesOnly: boolean;
  customerId: string;
  worksheet: string;
  status: string;
  replyCount: number;
  publicationDate: number;
}

export interface Message {
  id: string;
  authorId: string;
  content: string;
  read: boolean;
  publicationDate: number;
}

export interface Discussion {
  id: string;
  customerId: string;
  specialistId: string;
  messages: Message[];
}

export interface Reply {
  id: string;
  projectId: string;
  discussion: Discussion | undefined;
  status: string;
}

export interface Review {
  id: string;
  projectId: string;
  replyId: string;
  customerId: string;
  specialistId: string;
  rating: number;
  comment: string;
}

export interface CustomersFilter {
  id: string[];
}

export interface GetCustomersRequest {
  pager: Pager | undefined;
  order: Order | undefined;
  filters: CustomersFilter | undefined;
}

export interface GetCustomersResponse {
  rows: Customer[];
  pageInfo: PageInfo | undefined;
}

export interface SpecialistsFilter {
  id: string[];
}

export interface GetSpecialistsRequest {
  pager: Pager | undefined;
  order: Order | undefined;
  filters: SpecialistsFilter | undefined;
}

export interface GetSpecialistsResponse {
  rows: Specialist[];
  pageInfo: PageInfo | undefined;
}

export interface DiscussionsFilter {
  id: string[];
  customerId: string[];
  specialistId: string[];
}

export interface GetDiscussionsRequest {
  pager: Pager | undefined;
  order: Order | undefined;
  filters: DiscussionsFilter | undefined;
}

export interface GetDiscussionsResponse {
  rows: Discussion[];
  pageInfo: PageInfo | undefined;
}

export interface UpdateSpecialistRequest {
  id: string;
  formOfWork: string;
  numberOfEmployees: string;
  companyName: string;
  mainSpecialisation: string[];
  additionalSpecialisation: string[];
  description: string;
}

export interface UpdateSpecialistErrors {
  id: string;
  formOfWork: string;
  numberOfEmployees: string;
  companyName: string;
  mainSpecialisation: string;
  additionalSpecialisation: string;
  description: string;
}

export interface UpdateSpecialistResponse {
  errors: UpdateSpecialistErrors | undefined;
  result: Specialist | undefined;
}

export interface ChangeAccountTypeRequest {
  specialistId: string;
  type: string;
}

export interface ChangeAccountTypeErrors {
  specialistId: string;
  type: string;
}

export interface ChangeAccountTypeResponse {
  errors: ChangeAccountTypeErrors | undefined;
  result: Specialist | undefined;
}

export interface CreateProjectRequest {
  customerId: string;
  name: string;
  categoryId: string;
  description: string;
  photos: string[];
  address: string;
  beginningOfWork: string;
  budget: number;
  legalEntitiesOnly: boolean;
  worksheet: string;
}

export interface CreateProjectErrors {
  customerId: string;
  name: string;
  category: string;
  description: string;
  photos: string;
  address: string;
  beginningOfWork: string;
  budget: string;
  legalEntitiesOnly: string;
}

export interface CreateProjectResponse {
  errors: CreateProjectErrors | undefined;
  result: Project | undefined;
}

export interface UpdateProjectRequest {
  id: string;
  customerId: string;
  name: string;
  description: string;
  photos: string[];
  address: string;
  beginningOfWork: string;
  budget: number;
  legalEntitiesOnly: boolean;
  worksheet: string;
}

export interface UpdateProjectErrors {
  id: string;
  customerId: string;
  name: string;
  description: string;
  photos: string;
  address: string;
  beginningOfWork: string;
  budget: string;
  legalEntitiesOnly: string;
}

export interface UpdateProjectResponse {
  errors: UpdateProjectErrors | undefined;
  result: Project | undefined;
}

export interface AddProjectReplyRequest {
  specialistId: string;
  projectId: string;
  message: string;
}

export interface AddProjectReplyErrors {
  specialistId: string;
  projectId: string;
  message: string;
}

export interface AddProjectReplyResponse {
  errors: AddProjectReplyErrors | undefined;
  result: Reply | undefined;
}

export interface RejectProjectReplyRequest {
  specialistId: string;
  projectId: string;
}

export interface RejectProjectReplyErrors {
  specialistId: string;
  projectId: string;
}

export interface RejectProjectReplyResponse {
  errors: RejectProjectReplyErrors | undefined;
  result: Reply | undefined;
}

export interface ConfirmProjectReplyRequest {
  specialistId: string;
  projectId: string;
}

export interface ConfirmProjectReplyErrors {
  specialistId: string;
  projectId: string;
}

export interface ConfirmProjectReplyResponse {
  errors: ConfirmProjectReplyErrors | undefined;
  result: Reply | undefined;
}

export interface RepliesFilter {
  id: string[];
  projectId: string[];
  specialistId: string[];
}

export interface GetRepliesRequest {
  pager: Pager | undefined;
  order: Order | undefined;
  filters: RepliesFilter | undefined;
}

export interface GetRepliesResponse {
  rows: Reply[];
  pageInfo: PageInfo | undefined;
}

export interface ReviewsFilter {
  id: string[];
  projectId: string[];
  specialistId: string[];
}

export interface GetReviewsRequest {
  pager: Pager | undefined;
  order: Order | undefined;
  filters: ReviewsFilter | undefined;
}

export interface GetReviewsResponse {
  rows: Review[];
  pageInfo: PageInfo | undefined;
}

export interface AddReplyMessageRequest {
  replyId: string;
  authorId: string;
  message: string;
}

export interface AddReplyMessageErrors {
  replyId: string;
  authorId: string;
  message: string;
}

export interface AddReplyMessageResponse {
  errors: AddReplyMessageErrors | undefined;
  result: Message | undefined;
}

export interface ChangeReplyStatusRequest {
  replyId: string;
  status: string;
  customerId: string;
}

export interface ChangeReplyStatusErrors {
  replyId: string;
  status: string;
}

export interface ChangeReplyStatusResponse {
  errors: ChangeReplyStatusErrors | undefined;
  result: Reply | undefined;
}

export interface ChooseSpecialistRequest {
  replyId: string;
  customerId: string;
}

export interface ChooseSpecialistErrors {
  replyId: string;
  customerId: string;
}

export interface ChooseSpecialistResponse {
  errors: ChooseSpecialistErrors | undefined;
  result: Project | undefined;
}

export interface PublishProjectRequest {
  projectId: string;
  customerId: string;
}

export interface PublishProjectErrors {
  projectId: string;
  customerId: string;
}

export interface PublishProjectResponse {
  errors: PublishProjectErrors | undefined;
  result: Project | undefined;
}

export interface CompleteProjectRequest {
  projectId: string;
  customerId: string;
  rating: number;
  comment: string;
}

export interface CompleteProjectErrors {
  projectId: string;
  customerId: string;
  rating: string;
  comment: string;
}

export interface CompleteProjectResponse {
  errors: CompleteProjectErrors | undefined;
  result: Review | undefined;
}

export interface AddDiscussionMessageRequest {
  specialistId: string;
  customerId: string;
  authorId: string;
  message: string;
}

export interface AddDiscussionMessageErrors {
  specialistId: string;
  customerId: string;
  authorId: string;
  message: string;
}

export interface AddDiscussionMessageResponse {
  errors: AddDiscussionMessageErrors | undefined;
  result: Message | undefined;
}

export interface CollaborationServiceServer
  extends UntypedServiceImplementation {
  getCustomers: handleUnaryCall<GetCustomersRequest, GetCustomersResponse>;
  getSpecialists: handleUnaryCall<
    GetSpecialistsRequest,
    GetSpecialistsResponse
  >;
  getDiscussions: handleUnaryCall<
    GetDiscussionsRequest,
    GetDiscussionsResponse
  >;
  getChatDiscussions: handleUnaryCall<
    GetDiscussionsRequest,
    GetDiscussionsResponse
  >;
  updateSpecialist: handleUnaryCall<
    UpdateSpecialistRequest,
    UpdateSpecialistResponse
  >;
  changeAccountType: handleUnaryCall<
    ChangeAccountTypeRequest,
    ChangeAccountTypeResponse
  >;
  createProject: handleUnaryCall<CreateProjectRequest, CreateProjectResponse>;
  updateProject: handleUnaryCall<UpdateProjectRequest, UpdateProjectResponse>;
  getProjects: handleUnaryCall<GetProjectsRequest, GetProjectsResponse>;
  addProjectReply: handleUnaryCall<
    AddProjectReplyRequest,
    AddProjectReplyResponse
  >;
  rejectProjectReply: handleUnaryCall<
    RejectProjectReplyRequest,
    RejectProjectReplyResponse
  >;
  confirmProjectReply: handleUnaryCall<
    ConfirmProjectReplyRequest,
    ConfirmProjectReplyResponse
  >;
  getReplies: handleUnaryCall<GetRepliesRequest, GetRepliesResponse>;
  addReplyMessage: handleUnaryCall<
    AddReplyMessageRequest,
    AddReplyMessageResponse
  >;
  changeReplyStatus: handleUnaryCall<
    ChangeReplyStatusRequest,
    ChangeReplyStatusResponse
  >;
  chooseSpecialist: handleUnaryCall<
    ChooseSpecialistRequest,
    ChooseSpecialistResponse
  >;
  completeProject: handleUnaryCall<
    CompleteProjectRequest,
    CompleteProjectResponse
  >;
  publishProject: handleUnaryCall<
    PublishProjectRequest,
    PublishProjectResponse
  >;
  getReviews: handleUnaryCall<GetReviewsRequest, GetReviewsResponse>;
  addDiscussionMessage: handleUnaryCall<
    AddDiscussionMessageRequest,
    AddDiscussionMessageResponse
  >;
}

export interface CollaborationServiceClient extends Client {
  getCustomers(
    request: GetCustomersRequest,
    callback: (
      error: ServiceError | null,
      response: GetCustomersResponse
    ) => void
  ): ClientUnaryCall;
  getCustomers(
    request: GetCustomersRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetCustomersResponse
    ) => void
  ): ClientUnaryCall;
  getCustomers(
    request: GetCustomersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetCustomersResponse
    ) => void
  ): ClientUnaryCall;
  getSpecialists(
    request: GetSpecialistsRequest,
    callback: (
      error: ServiceError | null,
      response: GetSpecialistsResponse
    ) => void
  ): ClientUnaryCall;
  getSpecialists(
    request: GetSpecialistsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetSpecialistsResponse
    ) => void
  ): ClientUnaryCall;
  getSpecialists(
    request: GetSpecialistsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetSpecialistsResponse
    ) => void
  ): ClientUnaryCall;
  getDiscussions(
    request: GetDiscussionsRequest,
    callback: (
      error: ServiceError | null,
      response: GetDiscussionsResponse
    ) => void
  ): ClientUnaryCall;
  getDiscussions(
    request: GetDiscussionsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetDiscussionsResponse
    ) => void
  ): ClientUnaryCall;
  getDiscussions(
    request: GetDiscussionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetDiscussionsResponse
    ) => void
  ): ClientUnaryCall;
  getChatDiscussions(
    request: GetDiscussionsRequest,
    callback: (
      error: ServiceError | null,
      response: GetDiscussionsResponse
    ) => void
  ): ClientUnaryCall;
  getChatDiscussions(
    request: GetDiscussionsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetDiscussionsResponse
    ) => void
  ): ClientUnaryCall;
  getChatDiscussions(
    request: GetDiscussionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetDiscussionsResponse
    ) => void
  ): ClientUnaryCall;
  updateSpecialist(
    request: UpdateSpecialistRequest,
    callback: (
      error: ServiceError | null,
      response: UpdateSpecialistResponse
    ) => void
  ): ClientUnaryCall;
  updateSpecialist(
    request: UpdateSpecialistRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: UpdateSpecialistResponse
    ) => void
  ): ClientUnaryCall;
  updateSpecialist(
    request: UpdateSpecialistRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: UpdateSpecialistResponse
    ) => void
  ): ClientUnaryCall;
  changeAccountType(
    request: ChangeAccountTypeRequest,
    callback: (
      error: ServiceError | null,
      response: ChangeAccountTypeResponse
    ) => void
  ): ClientUnaryCall;
  changeAccountType(
    request: ChangeAccountTypeRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ChangeAccountTypeResponse
    ) => void
  ): ClientUnaryCall;
  changeAccountType(
    request: ChangeAccountTypeRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ChangeAccountTypeResponse
    ) => void
  ): ClientUnaryCall;
  createProject(
    request: CreateProjectRequest,
    callback: (
      error: ServiceError | null,
      response: CreateProjectResponse
    ) => void
  ): ClientUnaryCall;
  createProject(
    request: CreateProjectRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CreateProjectResponse
    ) => void
  ): ClientUnaryCall;
  createProject(
    request: CreateProjectRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CreateProjectResponse
    ) => void
  ): ClientUnaryCall;
  updateProject(
    request: UpdateProjectRequest,
    callback: (
      error: ServiceError | null,
      response: UpdateProjectResponse
    ) => void
  ): ClientUnaryCall;
  updateProject(
    request: UpdateProjectRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: UpdateProjectResponse
    ) => void
  ): ClientUnaryCall;
  updateProject(
    request: UpdateProjectRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: UpdateProjectResponse
    ) => void
  ): ClientUnaryCall;
  getProjects(
    request: GetProjectsRequest,
    callback: (
      error: ServiceError | null,
      response: GetProjectsResponse
    ) => void
  ): ClientUnaryCall;
  getProjects(
    request: GetProjectsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetProjectsResponse
    ) => void
  ): ClientUnaryCall;
  getProjects(
    request: GetProjectsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetProjectsResponse
    ) => void
  ): ClientUnaryCall;
  addProjectReply(
    request: AddProjectReplyRequest,
    callback: (
      error: ServiceError | null,
      response: AddProjectReplyResponse
    ) => void
  ): ClientUnaryCall;
  addProjectReply(
    request: AddProjectReplyRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: AddProjectReplyResponse
    ) => void
  ): ClientUnaryCall;
  addProjectReply(
    request: AddProjectReplyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: AddProjectReplyResponse
    ) => void
  ): ClientUnaryCall;
  rejectProjectReply(
    request: RejectProjectReplyRequest,
    callback: (
      error: ServiceError | null,
      response: RejectProjectReplyResponse
    ) => void
  ): ClientUnaryCall;
  rejectProjectReply(
    request: RejectProjectReplyRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: RejectProjectReplyResponse
    ) => void
  ): ClientUnaryCall;
  rejectProjectReply(
    request: RejectProjectReplyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: RejectProjectReplyResponse
    ) => void
  ): ClientUnaryCall;
  confirmProjectReply(
    request: ConfirmProjectReplyRequest,
    callback: (
      error: ServiceError | null,
      response: ConfirmProjectReplyResponse
    ) => void
  ): ClientUnaryCall;
  confirmProjectReply(
    request: ConfirmProjectReplyRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ConfirmProjectReplyResponse
    ) => void
  ): ClientUnaryCall;
  confirmProjectReply(
    request: ConfirmProjectReplyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ConfirmProjectReplyResponse
    ) => void
  ): ClientUnaryCall;
  getReplies(
    request: GetRepliesRequest,
    callback: (error: ServiceError | null, response: GetRepliesResponse) => void
  ): ClientUnaryCall;
  getReplies(
    request: GetRepliesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetRepliesResponse) => void
  ): ClientUnaryCall;
  getReplies(
    request: GetRepliesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetRepliesResponse) => void
  ): ClientUnaryCall;
  addReplyMessage(
    request: AddReplyMessageRequest,
    callback: (
      error: ServiceError | null,
      response: AddReplyMessageResponse
    ) => void
  ): ClientUnaryCall;
  addReplyMessage(
    request: AddReplyMessageRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: AddReplyMessageResponse
    ) => void
  ): ClientUnaryCall;
  addReplyMessage(
    request: AddReplyMessageRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: AddReplyMessageResponse
    ) => void
  ): ClientUnaryCall;
  changeReplyStatus(
    request: ChangeReplyStatusRequest,
    callback: (
      error: ServiceError | null,
      response: ChangeReplyStatusResponse
    ) => void
  ): ClientUnaryCall;
  changeReplyStatus(
    request: ChangeReplyStatusRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ChangeReplyStatusResponse
    ) => void
  ): ClientUnaryCall;
  changeReplyStatus(
    request: ChangeReplyStatusRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ChangeReplyStatusResponse
    ) => void
  ): ClientUnaryCall;
  chooseSpecialist(
    request: ChooseSpecialistRequest,
    callback: (
      error: ServiceError | null,
      response: ChooseSpecialistResponse
    ) => void
  ): ClientUnaryCall;
  chooseSpecialist(
    request: ChooseSpecialistRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ChooseSpecialistResponse
    ) => void
  ): ClientUnaryCall;
  chooseSpecialist(
    request: ChooseSpecialistRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ChooseSpecialistResponse
    ) => void
  ): ClientUnaryCall;
  completeProject(
    request: CompleteProjectRequest,
    callback: (
      error: ServiceError | null,
      response: CompleteProjectResponse
    ) => void
  ): ClientUnaryCall;
  completeProject(
    request: CompleteProjectRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CompleteProjectResponse
    ) => void
  ): ClientUnaryCall;
  completeProject(
    request: CompleteProjectRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CompleteProjectResponse
    ) => void
  ): ClientUnaryCall;
  publishProject(
    request: PublishProjectRequest,
    callback: (
      error: ServiceError | null,
      response: PublishProjectResponse
    ) => void
  ): ClientUnaryCall;
  publishProject(
    request: PublishProjectRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: PublishProjectResponse
    ) => void
  ): ClientUnaryCall;
  publishProject(
    request: PublishProjectRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: PublishProjectResponse
    ) => void
  ): ClientUnaryCall;
  getReviews(
    request: GetReviewsRequest,
    callback: (error: ServiceError | null, response: GetReviewsResponse) => void
  ): ClientUnaryCall;
  getReviews(
    request: GetReviewsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetReviewsResponse) => void
  ): ClientUnaryCall;
  getReviews(
    request: GetReviewsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetReviewsResponse) => void
  ): ClientUnaryCall;
  addDiscussionMessage(
    request: AddDiscussionMessageRequest,
    callback: (
      error: ServiceError | null,
      response: AddDiscussionMessageResponse
    ) => void
  ): ClientUnaryCall;
  addDiscussionMessage(
    request: AddDiscussionMessageRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: AddDiscussionMessageResponse
    ) => void
  ): ClientUnaryCall;
  addDiscussionMessage(
    request: AddDiscussionMessageRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: AddDiscussionMessageResponse
    ) => void
  ): ClientUnaryCall;
}

export interface Empty {}

export interface Pager {
  take: number;
  offset: number;
}

export interface Order {
  by: string;
  direction: string;
}

export interface PageInfo {
  hasNext: boolean;
}

export interface FilesFilter {
  id: string[];
}

export interface File {
  id: string;
  url: string;
}

export interface UploadField {
  key: string;
  value: string;
}

export interface Upload {
  id: string;
  url: string;
  fields: UploadField[];
}

export interface CreateUploadRequest {
  type: string;
  name: string;
}

export interface CreateUploadResponse {
  result: Upload | undefined;
}

export interface ConfirmUploadRequest {
  id: string;
}

export interface ConfirmUploadResponse {
  result: File | undefined;
}

export interface GetFilesRequest {
  pager: Pager | undefined;
  order: Order | undefined;
  filters: FilesFilter | undefined;
}

export interface GetFilesResponse {
  rows: File[];
  pageInfo: PageInfo | undefined;
}

export interface FilesServiceServer extends UntypedServiceImplementation {
  getFiles: handleUnaryCall<GetFilesRequest, GetFilesResponse>;
  createUpload: handleUnaryCall<CreateUploadRequest, CreateUploadResponse>;
  confirmUpload: handleUnaryCall<ConfirmUploadRequest, ConfirmUploadResponse>;
}

export interface FilesServiceClient extends Client {
  getFiles(
    request: GetFilesRequest,
    callback: (error: ServiceError | null, response: GetFilesResponse) => void
  ): ClientUnaryCall;
  getFiles(
    request: GetFilesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetFilesResponse) => void
  ): ClientUnaryCall;
  getFiles(
    request: GetFilesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetFilesResponse) => void
  ): ClientUnaryCall;
  createUpload(
    request: CreateUploadRequest,
    callback: (
      error: ServiceError | null,
      response: CreateUploadResponse
    ) => void
  ): ClientUnaryCall;
  createUpload(
    request: CreateUploadRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CreateUploadResponse
    ) => void
  ): ClientUnaryCall;
  createUpload(
    request: CreateUploadRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CreateUploadResponse
    ) => void
  ): ClientUnaryCall;
  confirmUpload(
    request: ConfirmUploadRequest,
    callback: (
      error: ServiceError | null,
      response: ConfirmUploadResponse
    ) => void
  ): ClientUnaryCall;
  confirmUpload(
    request: ConfirmUploadRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ConfirmUploadResponse
    ) => void
  ): ClientUnaryCall;
  confirmUpload(
    request: ConfirmUploadRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ConfirmUploadResponse
    ) => void
  ): ClientUnaryCall;
}

export interface Email {
  address: string;
  verified: boolean;
}

export interface PersonalInformation {
  firstName: string;
  lastName: string;
}

export interface Phone {
  number: string;
}

export interface Address {
  formatted: string;
}

export interface ContactInformation {
  phone: Phone | undefined;
}

export interface Photo {
  id: string;
}

export interface Profile {
  type: string;
  photo: Photo | undefined;
  personalInformation: PersonalInformation | undefined;
  contactInformation: ContactInformation | undefined;
  address: Address | undefined;
  website: string;
}

export interface User {
  id: string;
  email: Email | undefined;
  profile: Profile | undefined;
}

export interface VerifyEmailRequest {
  token: string;
}

export interface VerifyEmailErrors {
  token: string;
}

export interface VerifyEmailResponse {
  errors: VerifyEmailErrors | undefined;
  result: User | undefined;
}

export interface RegisterRequest {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterErrors {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterResponse {
  errors: RegisterErrors | undefined;
  result: User | undefined;
}

export interface AuthenticateRequest {
  email: string;
  password: string;
}

export interface AuthenticateErrors {
  email: string;
  password: string;
}

export interface AuthenticateResponse {
  errors: AuthenticateErrors | undefined;
  result: User | undefined;
}

export interface ResetPasswordRequest {
  email: string;
}

export interface ResetPasswordErrors {
  email: string;
}

export interface ResetPasswordResponse {
  errors: ResetPasswordErrors | undefined;
}

export interface ChangePasswordRequest {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface ChangePasswordErrors {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface ChangePasswordResponse {
  errors: ChangePasswordErrors | undefined;
  result: User | undefined;
}

export interface CreateProfileRequest {
  id: string;
  type: string;
  firstName: string;
  lastName: string;
}

export interface CreateProfileErrors {
  id: string;
  type: string;
  firstName: string;
  lastName: string;
}

export interface CreateProfileResponse {
  errors: CreateProfileErrors | undefined;
  result: User | undefined;
}

export interface UsersFilter {
  id: string[];
}

export interface GetUsersRequest {
  pager: Pager | undefined;
  order: Order | undefined;
  filters: UsersFilter | undefined;
}

export interface GetUsersResponse {
  rows: User[];
  pageInfo: PageInfo | undefined;
}

export interface UpdateProfileRequest {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  photoId: string;
  address: string;
  website: string;
}

export interface UpdateProfileErrors {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  photoId: string;
  address: string;
  website: string;
}

export interface UpdateProfileResponse {
  errors: UpdateProfileErrors | undefined;
  result: Profile | undefined;
}

export interface IdentityServiceServer extends UntypedServiceImplementation {
  register: handleUnaryCall<RegisterRequest, RegisterResponse>;
  authenticate: handleUnaryCall<AuthenticateRequest, AuthenticateResponse>;
  verifyEmail: handleUnaryCall<VerifyEmailRequest, VerifyEmailResponse>;
  resetPassword: handleUnaryCall<ResetPasswordRequest, ResetPasswordResponse>;
  changePassword: handleUnaryCall<
    ChangePasswordRequest,
    ChangePasswordResponse
  >;
  createProfile: handleUnaryCall<CreateProfileRequest, CreateProfileResponse>;
  getUsers: handleUnaryCall<GetUsersRequest, GetUsersResponse>;
  updateProfile: handleUnaryCall<UpdateProfileRequest, UpdateProfileResponse>;
}

export interface IdentityServiceClient extends Client {
  register(
    request: RegisterRequest,
    callback: (error: ServiceError | null, response: RegisterResponse) => void
  ): ClientUnaryCall;
  register(
    request: RegisterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: RegisterResponse) => void
  ): ClientUnaryCall;
  register(
    request: RegisterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: RegisterResponse) => void
  ): ClientUnaryCall;
  authenticate(
    request: AuthenticateRequest,
    callback: (
      error: ServiceError | null,
      response: AuthenticateResponse
    ) => void
  ): ClientUnaryCall;
  authenticate(
    request: AuthenticateRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: AuthenticateResponse
    ) => void
  ): ClientUnaryCall;
  authenticate(
    request: AuthenticateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: AuthenticateResponse
    ) => void
  ): ClientUnaryCall;
  verifyEmail(
    request: VerifyEmailRequest,
    callback: (
      error: ServiceError | null,
      response: VerifyEmailResponse
    ) => void
  ): ClientUnaryCall;
  verifyEmail(
    request: VerifyEmailRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: VerifyEmailResponse
    ) => void
  ): ClientUnaryCall;
  verifyEmail(
    request: VerifyEmailRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: VerifyEmailResponse
    ) => void
  ): ClientUnaryCall;
  resetPassword(
    request: ResetPasswordRequest,
    callback: (
      error: ServiceError | null,
      response: ResetPasswordResponse
    ) => void
  ): ClientUnaryCall;
  resetPassword(
    request: ResetPasswordRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ResetPasswordResponse
    ) => void
  ): ClientUnaryCall;
  resetPassword(
    request: ResetPasswordRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ResetPasswordResponse
    ) => void
  ): ClientUnaryCall;
  changePassword(
    request: ChangePasswordRequest,
    callback: (
      error: ServiceError | null,
      response: ChangePasswordResponse
    ) => void
  ): ClientUnaryCall;
  changePassword(
    request: ChangePasswordRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ChangePasswordResponse
    ) => void
  ): ClientUnaryCall;
  changePassword(
    request: ChangePasswordRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ChangePasswordResponse
    ) => void
  ): ClientUnaryCall;
  createProfile(
    request: CreateProfileRequest,
    callback: (
      error: ServiceError | null,
      response: CreateProfileResponse
    ) => void
  ): ClientUnaryCall;
  createProfile(
    request: CreateProfileRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CreateProfileResponse
    ) => void
  ): ClientUnaryCall;
  createProfile(
    request: CreateProfileRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CreateProfileResponse
    ) => void
  ): ClientUnaryCall;
  getUsers(
    request: GetUsersRequest,
    callback: (error: ServiceError | null, response: GetUsersResponse) => void
  ): ClientUnaryCall;
  getUsers(
    request: GetUsersRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetUsersResponse) => void
  ): ClientUnaryCall;
  getUsers(
    request: GetUsersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetUsersResponse) => void
  ): ClientUnaryCall;
  updateProfile(
    request: UpdateProfileRequest,
    callback: (
      error: ServiceError | null,
      response: UpdateProfileResponse
    ) => void
  ): ClientUnaryCall;
  updateProfile(
    request: UpdateProfileRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: UpdateProfileResponse
    ) => void
  ): ClientUnaryCall;
  updateProfile(
    request: UpdateProfileRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: UpdateProfileResponse
    ) => void
  ): ClientUnaryCall;
}

export interface Sending {
  id: string;
  template: string;
  payload: string;
}

export interface getSendingRequest {
  id: string;
}

export interface MailerServiceServer extends UntypedServiceImplementation {
  getSending: handleUnaryCall<getSendingRequest, Sending>;
}

export interface MailerServiceClient extends Client {
  getSending(
    request: getSendingRequest,
    callback: (error: ServiceError | null, response: Sending) => void
  ): ClientUnaryCall;
  getSending(
    request: getSendingRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Sending) => void
  ): ClientUnaryCall;
  getSending(
    request: getSendingRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Sending) => void
  ): ClientUnaryCall;
}

export interface PortfolioFilter {
  id: string[];
  userId: string[];
}

export interface Portfolio {
  id: string;
  name: string;
  images: string[];
  userId: string;
}

export interface GetPortfolioRequest {
  pager: Pager | undefined;
  order: Order | undefined;
  filters: PortfolioFilter | undefined;
}

export interface GetPortfolioResponse {
  rows: Portfolio[];
  pageInfo: PageInfo | undefined;
}

export interface CreatePortfolioRequest {
  userId: string;
  name: string;
  images: string[];
}

export interface CreatePortfolioErrors {
  name: string;
}

export interface CreatePortfolioResponse {
  errors: CreatePortfolioErrors | undefined;
  result: Portfolio | undefined;
}

export interface UpdatePortfolioRequest {
  id: string;
  userId: string;
  name: string;
  images: string[];
}

export interface UpdatePortfolioErrors {
  id: string;
  userId: string;
  name: string;
}

export interface UpdatePortfolioResponse {
  errors: UpdatePortfolioErrors | undefined;
  result: Portfolio | undefined;
}

export interface PortfolioServiceServer extends UntypedServiceImplementation {
  getPortfolio: handleUnaryCall<GetPortfolioRequest, GetPortfolioResponse>;
  createPortfolio: handleUnaryCall<
    CreatePortfolioRequest,
    CreatePortfolioResponse
  >;
  updatePortfolio: handleUnaryCall<
    UpdatePortfolioRequest,
    UpdatePortfolioResponse
  >;
}

export interface PortfolioServiceClient extends Client {
  getPortfolio(
    request: GetPortfolioRequest,
    callback: (
      error: ServiceError | null,
      response: GetPortfolioResponse
    ) => void
  ): ClientUnaryCall;
  getPortfolio(
    request: GetPortfolioRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetPortfolioResponse
    ) => void
  ): ClientUnaryCall;
  getPortfolio(
    request: GetPortfolioRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetPortfolioResponse
    ) => void
  ): ClientUnaryCall;
  createPortfolio(
    request: CreatePortfolioRequest,
    callback: (
      error: ServiceError | null,
      response: CreatePortfolioResponse
    ) => void
  ): ClientUnaryCall;
  createPortfolio(
    request: CreatePortfolioRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CreatePortfolioResponse
    ) => void
  ): ClientUnaryCall;
  createPortfolio(
    request: CreatePortfolioRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CreatePortfolioResponse
    ) => void
  ): ClientUnaryCall;
  updatePortfolio(
    request: UpdatePortfolioRequest,
    callback: (
      error: ServiceError | null,
      response: UpdatePortfolioResponse
    ) => void
  ): ClientUnaryCall;
  updatePortfolio(
    request: UpdatePortfolioRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: UpdatePortfolioResponse
    ) => void
  ): ClientUnaryCall;
  updatePortfolio(
    request: UpdatePortfolioRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: UpdatePortfolioResponse
    ) => void
  ): ClientUnaryCall;
}

export interface Search {
  id: string;
  score: number;
}

export interface ProjectsFilter {
  id: string[];
  categoryId: string;
  status: string;
}

export interface SearchProjectsRequest {
  pager: Pager | undefined;
  order: Order | undefined;
  filters: ProjectsFilter | undefined;
  query: string;
}

export interface SearchProjectsResponse {
  rows: Search[];
  pageInfo: PageInfo | undefined;
}

export interface SpecialistsFilter {
  id: string[];
  specialisationId: string;
}

export interface SearchSpecialistsRequest {
  pager: Pager | undefined;
  order: Order | undefined;
  filters: SpecialistsFilter | undefined;
  query: string;
}

export interface SearchSpecialistsResponse {
  rows: Search[];
  pageInfo: PageInfo | undefined;
}

export interface SearchServiceServer extends UntypedServiceImplementation {
  searchProjects: handleUnaryCall<
    SearchProjectsRequest,
    SearchProjectsResponse
  >;
  searchSpecialists: handleUnaryCall<
    SearchSpecialistsRequest,
    SearchSpecialistsResponse
  >;
}

export interface SearchServiceClient extends Client {
  searchProjects(
    request: SearchProjectsRequest,
    callback: (
      error: ServiceError | null,
      response: SearchProjectsResponse
    ) => void
  ): ClientUnaryCall;
  searchProjects(
    request: SearchProjectsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: SearchProjectsResponse
    ) => void
  ): ClientUnaryCall;
  searchProjects(
    request: SearchProjectsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: SearchProjectsResponse
    ) => void
  ): ClientUnaryCall;
  searchSpecialists(
    request: SearchSpecialistsRequest,
    callback: (
      error: ServiceError | null,
      response: SearchSpecialistsResponse
    ) => void
  ): ClientUnaryCall;
  searchSpecialists(
    request: SearchSpecialistsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: SearchSpecialistsResponse
    ) => void
  ): ClientUnaryCall;
  searchSpecialists(
    request: SearchSpecialistsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: SearchSpecialistsResponse
    ) => void
  ): ClientUnaryCall;
}
