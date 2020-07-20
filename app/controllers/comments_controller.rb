class CommentsController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]
  def index
    @post = Post.find(params[:post_id])
    @comment = Comment.where(post_id: @post.id)
    render json: @comment, include: :post, status: :ok
  end

  def show
    @comment = Comment.find(params[:id])
    render json: @comment, include: :post, status: :ok
  end
  
  def create
    @comment = Comment.new(comment_params)
    @comment.user = @current_user
    @post = Post.find(params[:post_id])
    @comment.post = @post
    if @comment.save
    render json: @comment, include: :post, status: :ok
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end
  
  def update
    @comment = Comment.find(params[:id])
  if @comment.update(comment_params)
    render json: @comment, include: [:post, :user], status: :ok
  else
    render json: @comment.errors, status: :unprocessable_entity
  end
end
  
  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render json: @comment
  end
  
  private
  
  def comment_params
    params.require(:comment).permit(:post_id, :user_id, :content)
  end

end
