import React from 'react';

import PropTypes from 'prop-types';

import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';

const CourseForm = ({course, allAuthors, onSave, onUpdate, loading, errors}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onUpdate}
        error={errors.title}
        />

      <SelectInput
          name="authorId"
          label="Author"
          value={course.authorId}
          defaultOption="Select Author"
          options={allAuthors}
          onChange={onUpdate}
          error={errors.authorId}
          />

        <TextInput
          name="category"
          label="Category"
          value={course.category}
          onChange={onUpdate}
          error={errors.category}
          />
        <TextInput
          name="length"
          label="Length"
          value={course.length}
          onChange={onUpdate}
          error={errors.length}
          />

        <input
            type="submit"
            disabled={loading}
            value={loading ? 'Saving...' : 'Save'}
            className="btn btn-primary"
            onClick={onSave}
            />
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  allAuthors: PropTypes.array,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
