type ApiUser = { user_id: string; full_name: string; email_address: string };
type WebUser = { id: string; name: string; email: string };
// Write mapApiUser(api: ApiUser): User converting between formats.

function mapApiUser(api: ApiUser): WebUser {
    return {
        id: api.user_id,
        name: api.full_name,
        email: api.email_address
    }
}