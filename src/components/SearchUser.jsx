import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { useFetch } from '../hooks/useFetch';

export function SearchUser() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 800); // Wait 800ms after typing stops
  
  // This API searches users based on the debounced search term
  const { data: users, loading, error } = useFetch(
    debouncedSearch ? `https://jsonplaceholder.typicode.com/users?name_like=${debouncedSearch}` : null
  );

  return (
    <div className="search-section">
      <h3>🔍 User Search (with Debounce)</h3>
      <input
        type="text"
        placeholder="Search users by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      
      <div className="search-info">
        <p>
          <strong>Typing:</strong> {searchTerm} | 
          <strong> Searching for:</strong> {debouncedSearch}
        </p>
        <small>Notice how the search only happens after you stop typing!</small>
      </div>

      {loading && <p>⏳ Searching users...</p>}
      {error && <p className="error">❌ Error: {error}</p>}
      
      {users && users.length > 0 ? (
        <div className="users-list">
          {users.map(user => (
            <div key={user.id} className="user-card">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
          ))}
        </div>
      ) : debouncedSearch && !loading && (
        <p>No users found for "{debouncedSearch}"</p>
      )}
    </div>
  );
}