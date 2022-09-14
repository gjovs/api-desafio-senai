import { Router } from 'express';
import StudentController from './controllers/StudentController';
import CourseController from './controllers/CourseController';

const router = Router();

router.get('/students', StudentController.filter); // list all by course or others queries

router.get('/students/:id', StudentController.getById); // get student by id

router.get('/courses', CourseController.list); // list all courses

export default router;