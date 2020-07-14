class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
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
    @comment.update(comment_params)
    render json: @comment, include: :post, status: :ok
  end
  
  def destroy
    @comment = Comment.destroy
    render json: @comment, include: :post, status: :ok
  end
  
  private
  
  def comment_params
    params.require(:comment).permit(post_id, :content)
  end

end
