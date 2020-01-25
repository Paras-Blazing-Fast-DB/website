# Deployment Challenges

## Running database migrations in production systems

#### Assumption:
1. Current Version(v1) is running in production
2. Need to update systems to New Version(v2)
3. Database schema's changed in new version
4. As soon as database schema changes to new version, old code will start generating BAD_FIELD errors

# Solution

1. Copy production data to staging environment
2. Do run migrations twice in staging 
