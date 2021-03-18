import { getValues } from "./helpers/get-values";

export enum PermissionsEnum {
	/**
	 * Articles
	 */
	"article.like" = "article.like",
	"article.create" = "article.create",
	"article.update.own" = "article.update.own",
	"article.update.all" = "article.update.all",
	"article.delete.own" = "article.delete.own",
	"article.delete.all" = "article.delete.all",
	/**
	 * Articles Comments
	 */
	"article.comment.create" = "article.comment.create",
	"article.comment.update.own" = "article.comment.update.own",
	"article.comment.update.all" = "article.comment.update.all",
	"article.comment.delete.own" = "article.comment.delete.own",
	"article.comment.delete.all" = "article.comment.delete.all",
	/**
	 * Forum Question
	 */
	"forum.question.like" = "forum.question.like",
	"forum.question.create" = "forum.question.create",
	"forum.question.update.own" = "forum.question.update.own",
	"forum.question.update.all" = "forum.question.update.all",
	"forum.question.delete.own" = "forum.question.delete.own",
	"forum.question.delete.all" = "forum.question.delete.all",
	/**
	 * Forum Answer
	 */
	"forum.answer.like" = "forum.answer.like",
	"forum.answer.create" = "forum.answer.create",
	"forum.answer.update.own" = "forum.answer.update.own",
	"forum.answer.update.all" = "forum.answer.update.all",
	"forum.answer.delete.own" = "forum.answer.delete.own",
	"forum.answer.delete.all" = "forum.answer.delete.all",
	/**
	 * Courses
	 */
	"course.rate" = "course.rate",
	"course.create" = "course.create",
	"course.update.own" = "course.update.own",
	"course.update.all" = "course.update.all",
	"course.delete.own" = "course.delete.own",
	"course.delete.all" = "course.delete.all",
	/**
	 * Courses Comments
	 */
	"course.comment.create" = "course.comment.create",
	"course.comment.update.own" = "course.comment.update.own",
	"course.comment.update.all" = "course.comment.update.all",
	"course.comment.delete.own" = "course.comment.delete.own",
	"course.comment.delete.all" = "course.comment.delete.all",
	/**
	 * Certification
	 */
	"certification.course.buy" = "certification.course.buy",
	"certification.course.sell" = "certification.course.sell",
	/**
	 * Project
	 */
	"project.apply" = "project.apply",
	"project.create" = "project.create",
	"project.update.own" = "project.update.own",
	"project.update.all" = "project.update.all",
	"project.delete.own" = "project.delete.own",
	"project.delete.all" = "project.delete.all",
	/**
	 * Jobs
	 */
	"job.apply" = "job.apply",
	"job.create" = "job.create",
	"job.update.own" = "job.update.own",
	"job.update.all" = "job.update.all",
	"job.delete.own" = "job.delete.own",
	"job.delete.all" = "job.delete.all",
	/**
	 * Mentoring
	 */
	"mentor.add" = "mentor.add",
	"mentor.remove" = "mentor.remove",
}

export const PermissionsValues = () => getValues<PermissionsEnum>(PermissionsEnum);
