class CommentsController < ApplicationController
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
    @comment = Comment.create(comment_params)
    render json: @comment, include: :post, status: :ok
  end
  
  def update
    @comment = Comment.find(params[:id])
  if @comment.update(comment_params)
    render json: @comment, include: :post, status: :ok
  else
    render json: @comment.errors, status: :unprocessable_entity
  end
end
  
  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
  end
  
  private
  
  def comment_params
    params.require(:comment).permit(:post_id, :user_id, :content)
  end

end
