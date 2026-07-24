---
layout: page
title: "Dupsy"
permalink: /projects/dupsy/
---

<section class="project-hero">

  <p class="section-label">Software Development · Data Quality</p>

  <h1>Dupsy</h1>

  <p class="project-summary">
    A Python-based desktop application developed to clean, validate,
    standardize, and deduplicate Excel data through an accessible
    graphical interface.
  </p>

  <div class="project-meta">

    <div class="project-meta-item">
      <strong>Status</strong>
      <span>Completed</span>
    </div>

    <div class="project-meta-item">
      <strong>Role</strong>
      <span>Creator and Sole Developer</span>
    </div>

    <div class="project-meta-item">
      <strong>Type</strong>
      <span>Desktop Data-Cleaning Tool</span>
    </div>

  </div>

  <div class="project-actions">

    <a
      class="project-button primary"
      href="https://github.com/morevna6/dupsy"
      target="_blank"
      rel="noopener noreferrer"
    >
      View GitHub Repository
    </a>

    <a
      class="project-button secondary"
      href="{{ '/projects/' | relative_url }}"
    >
      Back to Projects
    </a>

  </div>

</section>

<hr>

<section class="project-section">

  <h2>Project Overview</h2>

  <p>
    Dupsy is a lightweight desktop application designed to improve the
    quality and usability of Excel-based customer and operational data.
    It provides non-technical users with a structured way to identify
    duplicate records, standardize inconsistent values, validate data,
    and prepare clean exports.
  </p>

  <p>
    The project originated from a real operational need during my work
    with customer and company data. Manual review was slow, repetitive,
    and vulnerable to inconsistent decisions. Dupsy transformed that
    workflow into a reusable desktop tool.
  </p>

</section>

<section class="project-section">

  <h2>The Problem</h2>

  <p>
    Customer datasets contained inconsistent formatting, duplicated
    records, incomplete values, and variations in company or contact
    information.
  </p>

  <p>
    These issues created several operational risks:
  </p>

  <ul class="project-list">
    <li>Repeated contact with the same customer</li>
    <li>Time-consuming manual duplicate checks</li>
    <li>Inconsistent cleaning decisions between files</li>
    <li>Reduced trust in exported data</li>
    <li>Difficulty reviewing large Excel datasets efficiently</li>
  </ul>

</section>

<section class="project-section">

  <h2>The Solution</h2>

  <p>
    I developed Dupsy as an offline desktop application that allows users
    to load Excel files, compare records, identify exact and similar
    duplicates, review results, and export cleaned datasets.
  </p>

  <p>
    The application was designed around usability as well as technical
    accuracy. Users do not need to write Python code or work directly
    inside notebooks. The workflow is handled through a graphical
    interface.
  </p>

</section>

<section class="project-section">

  <h2>Core Features</h2>

  <div class="feature-grid">

    <article class="feature-card">
      <h3>Excel File Processing</h3>
      <p>
        Loads and processes structured Excel data while preserving a
        clear workflow for review and export.
      </p>
    </article>

    <article class="feature-card">
      <h3>Exact Duplicate Detection</h3>
      <p>
        Identifies records that match exactly across selected fields.
      </p>
    </article>

    <article class="feature-card">
      <h3>Fuzzy Matching</h3>
      <p>
        Detects similar records containing spelling differences,
        formatting variations, or partial inconsistencies.
      </p>
    </article>

    <article class="feature-card">
      <h3>Data Standardization</h3>
      <p>
        Supports more consistent formatting and cleaner downstream
        analysis.
      </p>
    </article>

    <article class="feature-card">
      <h3>Granular Export Controls</h3>
      <p>
        Allows users to export cleaned records and duplicate results
        according to their review needs.
      </p>
    </article>

    <article class="feature-card">
      <h3>Offline Desktop Use</h3>
      <p>
        Processes files locally without requiring users to upload
        sensitive operational data to an external service.
      </p>
    </article>

  </div>

</section>

<section class="project-section">

  <h2>Workflow</h2>

  <ol class="workflow-list">
    <li>
      <strong>Import:</strong>
      The user selects one or more Excel files.
    </li>

    <li>
      <strong>Configure:</strong>
      Relevant columns and duplicate-detection settings are selected.
    </li>

    <li>
      <strong>Process:</strong>
      Dupsy evaluates records using exact and similarity-based matching.
    </li>

    <li>
      <strong>Review:</strong>
      Potential duplicate groups and cleaned records are presented for
      inspection.
    </li>

    <li>
      <strong>Export:</strong>
      The user exports the required cleaned or duplicate datasets.
    </li>
  </ol>

</section>

<section class="project-section">

  <h2>Technology Stack</h2>

  <ul class="project-tech-list large">
    <li>Python</li>
    <li>Pandas</li>
    <li>Tkinter</li>
    <li>RapidFuzz</li>
    <li>Excel Processing</li>
    <li>Desktop GUI Development</li>
  </ul>

</section>

<section class="project-section">

  <h2>Measured Impact</h2>

  <div class="impact-grid">

    <article class="impact-card">
      <strong>~50%</strong>
      <span>Reduction in processing time</span>
    </article>

    <article class="impact-card">
      <strong>70–80%</strong>
      <span>Faster access to usable data</span>
    </article>

    <article class="impact-card">
      <strong>93–100%</strong>
      <span>Reduction in duplicate customer calls</span>
    </article>

  </div>

  <p>
    These outcomes reflect the operational improvements achieved through
    the data-cleaning and duplicate-detection workflow that informed the
    development of Dupsy.
  </p>

</section>

<section class="project-section">

  <h2>Design Priorities</h2>

  <ul class="project-list">
    <li>Accessible use for non-technical users</li>
    <li>Fast processing of operational Excel files</li>
    <li>Clear separation between source data and exported results</li>
    <li>Local and offline data processing</li>
    <li>Reusable cleaning and validation logic</li>
    <li>Transparent duplicate-review workflow</li>
  </ul>

</section>

<section class="project-section">

  <h2>My Role</h2>

  <p>
    I designed and developed Dupsy independently.
  </p>

  <p>
    My responsibilities included:
  </p>

  <ul class="project-list">
    <li>Identifying the original operational problem</li>
    <li>Defining the data-cleaning workflow</li>
    <li>Developing the Python processing logic</li>
    <li>Implementing exact and fuzzy duplicate detection</li>
    <li>Building the graphical desktop interface</li>
    <li>Designing export options</li>
    <li>Testing the application with real workflow requirements</li>
    <li>Documenting the tool and its use</li>
  </ul>

</section>

<section class="project-section">

  <h2>Key Lessons</h2>

  <p>
    Dupsy demonstrated that a useful data product does not need to begin
    as a large platform. A focused tool can create substantial value when
    it addresses a specific operational bottleneck and is designed around
    the people who actually use it.
  </p>

  <p>
    The project strengthened my experience in data quality, desktop
    application development, workflow automation, user-centred design,
    and translating operational problems into technical systems.
  </p>

</section>

<section class="project-section project-footer">

  <h2>Project Links</h2>

  <div class="project-actions">

    <a
      class="project-button primary"
      href="https://github.com/morevna6/dupsy"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Source Code
    </a>

    <a
      class="project-button secondary"
      href="{{ '/projects/' | relative_url }}"
    >
      Explore Other Projects
    </a>

  </div>

</section>
